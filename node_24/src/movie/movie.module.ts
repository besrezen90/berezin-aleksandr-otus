import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MovieController } from './movie.controller';
import { movieProviders } from './movie.providers';
import { MovieResolver } from './movie.resolver';
import { MovieService } from './movie.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MovieController],
  providers: [MovieService, ...movieProviders, MovieResolver],
  exports: [MovieService],
})
export class MovieModule {}
