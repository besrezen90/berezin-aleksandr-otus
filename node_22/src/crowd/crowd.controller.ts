import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CrowdService } from './crowd.service';
import { CreateCrowdDto } from './dto/create-crowd.dto';
import { CrowdQueryDto } from './dto/crowd-query.dto';
import { DonateCrowdDto } from './dto/donate-crowd.dto';

@UseGuards(JwtAuthGuard)
@Controller('crowd')
export class CrowdController {
  constructor(private readonly crowdService: CrowdService) {}
  @Get()
  async findAll(@Req() req, @Query(ValidationPipe) params: CrowdQueryDto) {
    return await this.crowdService.findAll(req.user._id, params);
  }

  @Post()
  async createCrowd(@Req() req, @Body(ValidationPipe) crowd: CreateCrowdDto) {
    return await this.crowdService.createCrowd(req.user._id, crowd);
  }

  @Post('donate')
  async donateCrowd(@Body(ValidationPipe) donate: DonateCrowdDto) {
    return await this.crowdService.donateCrowd(donate);
  }
}
