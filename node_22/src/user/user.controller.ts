import {
  Controller,
  Get,
  UseGuards,
  Request,
  Put,
  Body,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserInfoDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getMe(@Request() req) {
    return await this.userService.getMe(req.user._id);
  }

  @Get('list')
  async findAll() {
    return await this.userService.findAll();
  }

  @Put()
  async updateUser(
    @Request() req,
    @Body(ValidationPipe) updateUserInfoDto: UpdateUserInfoDto,
  ) {
    return await this.userService.updateOne(req.user._id, updateUserInfoDto);
  }
}
