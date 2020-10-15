import { USER_PROVIDER } from 'src/constants';
import { User } from './user.entity';

export const userProviders = [
  {
    provide: USER_PROVIDER,
    useValue: User,
  },
];
