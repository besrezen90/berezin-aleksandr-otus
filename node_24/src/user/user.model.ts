import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BasicStateEnum, UserGenderEnum } from 'src/types';

registerEnumType(UserGenderEnum, {
  name: 'UserGenderEnum',
});

registerEnumType(BasicStateEnum, {
  name: 'BasicStateEnum',
});

@ObjectType()
export class User {
  @Field(type => Int)
  id: number;

  @Field(type => String)
  username: string;

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

  @Field(type => String)
  deletedAt?: string;
}
