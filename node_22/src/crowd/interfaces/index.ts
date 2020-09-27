import { Document } from 'mongoose';
import { statusEnum } from '../enums';

export interface ICreateCrowd extends Document {
  readonly userId: string;
  status: statusEnum;
  name: string;
  description: string;
  total: number;
  totalSum: number;
  url: string;
  readonly created_at: Date;
  updatedAt: Date;
}

export interface IReadableCrowd {
  name: string;
  description: string;
  total: number;
  totalSum: number;
  url: string;
  _id: string;
  created_at: Date;
  updatedAt: Date;
}

export interface IQueryDonateCrowd {
  sortedBy?: 'total' | 'totalSum' | 'created_at' | 'updatedAt';
  order?: 'asc' | 'desc';
  status?: statusEnum;
}
