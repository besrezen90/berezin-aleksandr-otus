import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Author } from 'src/author/author.entity';

@Table({ tableName: 'movies' })
export class Movie extends Model<Movie> {
  @AutoIncrement
  @Column({
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Author)
  authorId: number;

  @BelongsTo(() => Author, 'authorId')
  author: Author;

  @Column
  title: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
