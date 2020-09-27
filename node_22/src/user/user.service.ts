import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateNewUserDto } from './dto/create-new-user.dto';
import { IReadableUser, IUserInfo } from './intefaces';
import { UpdateUserInfoDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('UserInfo') private userInfo: Model<IUserInfo>) {}

  async createNewUser(newUser: CreateNewUserDto) {
    try {
      const isNew = await this.userInfo.exists({ userId: newUser.userId });
      if (isNew) {
        throw new ConflictException('User already exists');
      }
      const newUserInfo = new this.userInfo(newUser);
      await newUserInfo.save();
    } catch (error) {
      throw error;
    }
  }

  async getMe(id: string) {
    const user = await this.userInfo
      .findOne({ userId: id })
      .select('-__v -userId');

    if (!user) {
      throw new BadRequestException('Invalid user');
    }

    return user as IReadableUser;
  }

  async findAll() {
    const users = (await this.userInfo
      .find({})
      .select('-__v -userId')) as IReadableUser[];
    return users;
  }

  async updateOne(userId: string, payload: UpdateUserInfoDto) {
    await this.userInfo.updateOne({ userId }, { $set: payload as IUserInfo });
    return true;
  }
}
