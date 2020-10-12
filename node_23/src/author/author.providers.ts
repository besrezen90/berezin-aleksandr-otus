import { AUTHOR_PROVIDER } from 'src/constants';
import { Author } from './author.entity';

export const authorProviders = [
  {
    provide: AUTHOR_PROVIDER,
    useValue: Author,
  },
];
