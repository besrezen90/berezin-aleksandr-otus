import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserInfoSchema } from './schemas/user-info.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'UserInfo', schema: UserInfoSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
