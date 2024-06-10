import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../User';

const CoconutSchema: Schema = new mongoose.Schema({
  xPosition: {
    type: Number,
    required: true
  },
  yPosition: {
    type: Number,
    required: true
  },
  animationDuration: {
    type: String,
    required: true
  },
  message: {
    sender: {
      _id: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      username: {
        type: String,
        required: true
      }
    },
    receiver: {
      _id: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      image: {
        type: String
      },
      username: {
        type: String,
        required: true
      }
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }}, {
    timestamps: true,
    collection: 'Coconuts'
  }
);

export const Coconut = mongoose.models.Coconut || mongoose.model("Coconut", CoconutSchema);

export interface ICoconutModel extends Document {
  xPosition: number;
  yPosition: number;
  animationDuration: string;
}

export type ICoconut = {
  xPosition: number;
  yPosition: number;
  animationDuration: string;
  id?: string;
  message: {
    sender: Partial<IUser>;
    receiver: Partial<IUser>;
    title: string;
    content: string;
  }
};
