import { BasicStateEnum, UserGenderEnum } from 'src/types';

export class CreateUserDto {
  username: string;
  firstName: string;
  lastName: string;
  gender: UserGenderEnum;
  state: BasicStateEnum;
}

export class UpdateUserDto {
  firstName?: string;
  lastName?: string;
  gender?: UserGenderEnum;
  state?: BasicStateEnum;
}
