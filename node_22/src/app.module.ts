import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CrowdModule } from './crowd/crowd.module';

const environment = process.env.NODE_ENV || 'development';

const APP_MODULES_CONFIG = [
  UserModule,
  ConfigModule.forRoot({
    envFilePath: `.env.${environment}`,
    isGlobal: true,
  }),
  MongooseModule.forRoot(process.env.MONGODB_WRITE_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }),
  AuthModule,
  CrowdModule,
];

@Module({
  imports: APP_MODULES_CONFIG,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
