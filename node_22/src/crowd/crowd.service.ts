import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCrowdDto } from './dto/create-crowd.dto';
import { CrowdQueryDto } from './dto/crowd-query.dto';
import { DonateCrowdDto } from './dto/donate-crowd.dto';
import { statusEnum } from './enums';
import { ICreateCrowd, IQueryDonateCrowd, IReadableCrowd } from './interfaces';

@Injectable()
export class CrowdService {
  constructor(
    @InjectModel('Crowd') private readonly crowdModel: Model<ICreateCrowd>,
  ) {}
  async findAll(userId: string, params?: CrowdQueryDto) {
    const { sortedBy, status, order } = params as IQueryDonateCrowd;
    return (await this.crowdModel
      .find({ userId, ...(status && { status }) })
      .sort({ [sortedBy]: order === 'asc' ? 1 : -1 })
      .select('-__v -userId -status')) as IReadableCrowd[];
  }

  async createCrowd(userId: string, crowd: CreateCrowdDto) {
    const newCrowd = new this.crowdModel({
      userId,
      status: 'active',
      totalSum: 0,
      ...crowd,
    });

    const savedCrowd = await newCrowd.save();
    return (await this.crowdModel
      .findOne({ _id: savedCrowd._id })
      .select('-__v -userId -status')) as IReadableCrowd;
  }

  async donateCrowd(donate: DonateCrowdDto) {
    const crowd = await this.crowdModel.findOne({ _id: donate.id });
    if (!crowd) {
      throw new BadRequestException('Invalid crowd id');
    }
    crowd.totalSum += donate.sum;
    crowd.status =
      crowd.totalSum >= crowd.total ? statusEnum.complete : statusEnum.active;
    await crowd.save();

    return await this.crowdModel
      .findById(donate.id)
      .select('-__v -userId -status');
  }
}
