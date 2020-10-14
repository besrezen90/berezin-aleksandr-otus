import { Document } from 'mongoose';

export interface IUserAuth extends Document {
  readonly username: string;
  readonly password: string;
}
