import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  DataType,
  HasMany,
  Default,
} from 'sequelize-typescript';
import { Movie } from 'src/movie/movie.entity';
import { BasicStateEnum, UserGenderEnum } from 'src/types';

@Table({ tableName: 'authors' })
export class Author extends Model<Author> {
  @AutoIncrement
  @Column({
    primaryKey: true,
  })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Default(UserGenderEnum.NONE)
  @Column(DataType.ENUM(...Object.keys(UserGenderEnum)))
  gender: UserGenderEnum;

  @Default(BasicStateEnum.ACTIVE)
  @Column(DataType.ENUM(...Object.keys(BasicStateEnum)))
  state: BasicStateEnum;

  @HasMany(() => Movie)
  movies: Movie[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
