import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard } from 'src/auth/guards/graphql.guard';
import {
  CreateMovieInput,
  Movie,
  Movies,
  SingleMovie,
  UpdateMovieInput,
} from './movie.model';
import { MovieService } from './movie.service';

@UseGuards(GqlAuthGuard)
@Resolver(of => Movies)
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => Movies, { name: 'movies' })
  async getAuthors(
    @Args('authorId', {
      type: () => Int,
    })
    authorId: number,
  ) {
    return await this.movieService.getMoviesByAuthor(authorId);
  }

  @Query(() => SingleMovie, { name: 'movie' })
  async getMovie(
    @Args('movieId', {
      type: () => Int,
    })
    movieId: number,
  ) {
    return await this.movieService.getMovieById(movieId);
  }

  @Mutation(() => SingleMovie, { name: 'deleteMovie' })
  async deleteMovie(@Args('movieId', { type: () => Int }) id: number) {
    return await this.movieService.deleteMovie(id);
  }

  @Mutation(() => Movie, { name: 'createMovie' })
  async createMovie(@Args('movie', { type: () => CreateMovieInput }) movie) {
    return await this.movieService.createMovie(movie);
  }

  @Mutation(() => Movie, { name: 'updateMovie' })
  async updateMovie(@Args('movie', { type: () => UpdateMovieInput }) movie) {
    return await this.movieService.updateMovie(movie);
  }
}
