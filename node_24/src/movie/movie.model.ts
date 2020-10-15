import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { UserGenderEnum, BasicStateEnum } from 'src/types';
registerEnumType(UserGenderEnum, {
  name: 'UserGenderEnum',
});

registerEnumType(BasicStateEnum, {
  name: 'BasicStateEnum',
});

@ObjectType()
class MovieAuthor {
  @Field(type => Int)
  id: number;
  @Field(type => String)
  firstName: string;
  @Field(type => String)
  lastName: string;
  @Field(type => UserGenderEnum)
  gender: UserGenderEnum;
  @Field(type => BasicStateEnum)
  state: BasicStateEnum;
  @Field(type => String)
  createdAt: string;
  @Field(type => String)
  updatedAt: string;
  @Field(type => String, { nullable: true })
  deletedAt: string;
}

@ObjectType()
export class Movie {
  @Field(() => Int)
  id: number;
  @Field(type => String)
  title: string;
  @Field(type => String)
  createdAt: string;
  @Field(type => String)
  updatedAt: string;
  @Field(type => String, { nullable: true })
  deletedAt: string;
  @Field(() => Int)
  authorId: number;
}

@ObjectType()
export class SingleMovie extends Movie {
  @Field(() => MovieAuthor)
  author: MovieAuthor;
}

@ObjectType()
export class Movies {
  @Field(() => Int)
  count: number;
  @Field(type => [Movie])
  rows: Movie[];
}

@InputType()
export class CreateMovieInput {
  @Field(() => Int)
  authorId: number;
  @Field(type => String)
  title: String;
}

@InputType()
export class UpdateMovieInput {
  @Field(() => Int)
  id: number;
  @Field(type => Int, { nullable: true })
  authorId: number;
  @Field(type => String, { nullable: true })
  title: String;
}
