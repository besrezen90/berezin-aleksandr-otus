import { Inject, Injectable } from '@nestjs/common';
import { Author } from 'src/author/author.entity';
import { MOVIE_PROVIDER } from 'src/constants';
import { CreateMovieDto, UpdateMovieDto } from './movie.dto';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @Inject(MOVIE_PROVIDER) private readonly movieProvider: typeof Movie,
  ) {}

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

  async createMovie(movie: CreateMovieDto) {
    const newMovie: Movie = await this.movieProvider.create(movie);
    return newMovie;
  }

  async updateMovie(updateMovie: UpdateMovieDto) {
    const { id, ...newFields } = updateMovie;
    const movie: Movie = await this.movieProvider.findByPk(id);

    await movie.update({ ...newFields });
    return movie;
  }

  async deleteMovie(id: number) {
    const movie: Movie = await this.movieProvider.findByPk(id);
    await movie.destroy();
    return movie;
  }
}
