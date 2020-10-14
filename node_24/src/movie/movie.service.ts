import { Inject, Injectable } from '@nestjs/common';
import { Author } from 'src/author/author.entity';
import { MOVIE_PROVIDER } from 'src/constants';
import { CustomCatch } from 'src/decorators/catch.decorator';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @Inject(MOVIE_PROVIDER) private readonly movieProvider: typeof Movie,
  ) {}

  @CustomCatch
  async getMoviesByAuthor(authorId: number) {
    const movies: {
      rows: Movie[];
      count: number;
    } = await this.movieProvider.findAndCountAll({
      where: { authorId },
      distinct: true,
    });

    return movies;
  }

  @CustomCatch
  async getMovieById(id: number) {
    const movie: Movie = await this.movieProvider.findOne({
      where: { id },
      include: [
        {
          model: Author,
          as: 'author',
        },
      ],
    });

    return movie;
  }

  @CustomCatch
  async createMovie(movie: CreateMovieDto) {
    const newMovie: Movie = await this.movieProvider.create(movie);
    return newMovie;
  }

  @CustomCatch
  async updateMovie(updateMovie: UpdateMovieDto) {
    const { id, ...newFields } = updateMovie;
    const movie: Movie = await this.movieProvider.findByPk(id);

    await movie.update({ ...newFields });
    return movie;
  }

  @CustomCatch
  async deleteMovie(id: number) {
    const movie: Movie = await this.movieProvider.findByPk(id);
    await movie.destroy();
    return movie;
  }
}
