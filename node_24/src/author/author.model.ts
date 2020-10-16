import {
  Field,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { DEFAULT_VALUES } from 'src/constants';
import { Movie } from 'src/movie/movie.model';
import { UserGenderEnum, BasicStateEnum } from 'src/types';

registerEnumType(UserGenderEnum, {
  name: 'UserGenderEnum',
});

registerEnumType(BasicStateEnum, {
  name: 'BasicStateEnum',
});

@ObjectType()
export class Author {
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
  @Field(type => [Movie])
  movies: Movie[];
}

@ObjectType()
export class Authors {
  @Field(type => Int)
  count: number;
  @Field(type => [Author])
  rows: Author[];
}

@InputType()
export class AuthorsFilterInput {
  @Field(type => Int, {
    nullable: true,
    defaultValue: DEFAULT_VALUES.DB_DEFAULT_LIMIT,
  })
  limit?: number;
  @Field(type => Int, {
    nullable: true,
    defaultValue: DEFAULT_VALUES.DB_OFFSET,
  })
  offset?: number;
  @Field(type => Int, { nullable: true })
  id?: number;
  @Field(type => String, { nullable: true })
  firstName?: string;
  @Field(type => String, { nullable: true })
  lastName?: string;
  @Field(type => UserGenderEnum, { nullable: true })
  gender?: UserGenderEnum;
  @Field(type => BasicStateEnum, { nullable: true })
  state?: BasicStateEnum;
  @Field(type => String, { nullable: true })
  createdAt?: string;
  @Field(type => String, { nullable: true })
  updatedAt?: string;
}

@InputType()
export class CreateAuthorInput {
  @Field(type => String)
  firstName: string;
  @Field(type => String)
  lastName: string;
  @Field(type => UserGenderEnum)
  gender: UserGenderEnum;
}

@InputType()
export class UpdateAuthorInput {
  @Field(type => Int)
  id: number;
  @Field(type => String, { nullable: true })
  firstName?: string;
  @Field(type => String, { nullable: true })
  lastName?: string;
  @Field(type => UserGenderEnum, { nullable: true })
  gender?: UserGenderEnum;
}
