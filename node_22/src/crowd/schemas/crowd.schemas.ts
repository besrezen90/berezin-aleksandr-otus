import * as mongoose from 'mongoose';
import { statusEnum } from '../enums';

export const CrowdSchema = new mongoose.Schema(
  {
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

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },

    totalSum: {
      type: Number,
      required: true,
      min: 0,
    },

    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } },
);
