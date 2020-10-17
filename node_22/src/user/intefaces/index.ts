import { Document } from 'mongoose';
import { genderEnum, statusEnum } from '../enums';

export interface IUserInfo extends Document {
  readonly userId: string;
  status: statusEnum;
  firstName: string;
  lastName: string;
  age: number | null;
  url: string;
  gender: genderEnum;
}

export interface IReadableUser {
  status: string;
  firstName: string;
  lastName: string;
  age: number | null;
  url: string;
  gender: string;
  _id: string;
}
