import { Sequelize } from 'sequelize-typescript';
import { Author } from 'src/author/author.entity';
import { DATABASE_PROVIDER } from 'src/constants';
import { Movie } from 'src/movie/movie.entity';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 35432,
        username: 'dbcore',
        password: 'dbcore',
        database: 'node_24',
        logging: false,
      });
      sequelize.addModels([User, Author, Movie]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
