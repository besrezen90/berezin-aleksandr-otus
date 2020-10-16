import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { AuthorController } from './author.controller';
import { authorProviders } from './author.providers';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorController],
  providers: [AuthorService, ...authorProviders, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
