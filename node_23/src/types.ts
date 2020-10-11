export interface IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  gender: UserGenderEnum;
  state: BasicStateEnum;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export enum UserGenderEnum {
  NONE = 'NONE',
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export enum BasicStateEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  DELETED = 'DELETED',
}
