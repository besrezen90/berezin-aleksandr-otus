import {
  Body,
  Controller,
  Delete,
  Get,
  Put,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('api/user')
@UseGuards(JwtAuthGuard)
@UsePipes(ValidationPipe)
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser(@Req() req: any) {
    return await this.userService.get(req.user.username);
  }

  @Delete()
  async deleteUser(@Req() req: any) {
    return await this.userService.delete(req.user.username);
  }

  @Put()
  async updateUser(@Req() req, @Body() user: UpdateUserDto) {
    const updateFields = { username: req.user.username, ...user };
    return await this.userService.update(updateFields);
  }
}
