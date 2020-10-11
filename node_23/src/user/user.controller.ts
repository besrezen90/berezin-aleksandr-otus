import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

// TODO: воткнуть авторизацию
// TODO: воткнуть валидацию
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getUser() {
    return await this.userService.get('test3');
  }

  @Delete()
  async deleteUser(@Body('id') id: number) {
    console.log(id);
    return await this.userService.delete(id);
  }

  @Post()
  async updateUser(@Req() req, @Body() user: UpdateUserDto) {
    const updateFields = { username: req.username, ...user };
    return await this.userService.update(updateFields);
  }
}
