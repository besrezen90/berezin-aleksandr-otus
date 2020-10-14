import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorController } from './author.controller';
import { authorProviders } from './author.providers';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService, ...authorProviders],
  exports: [AuthorService],
})
export class AuthorModule {}
