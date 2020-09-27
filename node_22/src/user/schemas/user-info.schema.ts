import * as mongoose from 'mongoose';
import { genderEnum, statusEnum } from '../enums';

export const UserInfoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  status: {
    type: String,
    required: true,
    enum: Object.values(statusEnum),
    default: 'active',
  },

  firstName: {
    type: String,
    default: `User`,
  },
  lastName: {
    type: String,
    default: Date.now().toString(),
  },
  age: {
    type: Number,
    default: null,
  },
  url: {
    type: String,
    default: 'https://rust-lang.org/logos/rust-logo-512x512-blk.png',
  },
  gender: {
    type: String,
    required: true,
    enum: Object.values(genderEnum),
    default: 'male',
  },
});
