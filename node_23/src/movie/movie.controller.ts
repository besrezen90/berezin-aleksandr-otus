import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';
import { MovieService } from './movie.service';

@UseGuards(JwtAuthGuard)
@UsePipes(ValidationPipe)
@Controller('api/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async getMoviesByAuthor(@Query('authorId', ParseIntPipe) authorId: number) {
    return await this.movieService.getMoviesByAuthor(authorId);
  }

  @Get(':id')
  async getMovieById(@Param('id', ParseIntPipe) id: number) {
    return await this.movieService.getMovieById(id);
  }

  @Delete(':id')
  async deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return await this.movieService.deleteMovie(id);
  }

  @Post()
  async createMovie(@Body() movie: CreateMovieDto) {
    return await this.movieService.createMovie(movie);
  }

  @Put()
  async updateMovie(@Body() movie: UpdateMovieDto) {
    return await this.movieService.updateMovie(movie);
  }
}
