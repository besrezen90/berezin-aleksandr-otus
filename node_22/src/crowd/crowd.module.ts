import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CrowdController } from './crowd.controller';
import { CrowdService } from './crowd.service';
import { CrowdSchema } from './schemas/crowd.schemas';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Crowd', schema: CrowdSchema }]),
  ],
  controllers: [CrowdController],
  providers: [CrowdService],
})
export class CrowdModule {}
