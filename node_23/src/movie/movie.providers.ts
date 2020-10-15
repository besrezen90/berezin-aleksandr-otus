import { MOVIE_PROVIDER } from 'src/constants';
import { Movie } from 'src/movie/movie.entity';

export const movieProviders = [
  {
    provide: MOVIE_PROVIDER,
    useValue: Movie,
  },
];
