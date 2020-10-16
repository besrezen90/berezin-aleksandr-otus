import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userProviders } from './user.providers';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, ...userProviders, UserResolver],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
