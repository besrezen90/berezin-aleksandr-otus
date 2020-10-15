import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  DataType,
} from 'sequelize-typescript';
import { BasicStateEnum, UserGenderEnum } from 'src/types';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @AutoIncrement
  @Column({
    primaryKey: true,
  })
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({})
  firstName: string;

  @Column
  lastName: string;

  @Column(DataType.ENUM(...Object.keys(UserGenderEnum)))
  gender: UserGenderEnum;

  @Column(DataType.ENUM(...Object.keys(BasicStateEnum)))
  state: BasicStateEnum;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
