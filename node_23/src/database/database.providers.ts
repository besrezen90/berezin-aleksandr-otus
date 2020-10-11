import { Sequelize } from 'sequelize-typescript';
import { DATABASE_PROVIDER } from 'src/constants';
import { User } from 'src/user/user.entity';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: '127.0.0.1',
        port: 3001,
        username: 'dbcore',
        password: 'dbcore',
        database: 'node_23',
        logging: false,
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
