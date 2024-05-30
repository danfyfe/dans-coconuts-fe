import mongoose, { Document, Schema } from 'mongoose';

const CoconutSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
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
  users: {
    type: Array,
    default: []
  }
});

export const Coconut = mongoose.models.Coconut || mongoose.model("Coconut", CoconutSchema);

export interface ICoconut {
  xPosition: number;
  yPosition: number;
  animationDuration: string;
  designation?: string;
  image: string;
  alt: string;
  id: number;
  name: string;
  content: string;
  title: string;
  users: string[];
};
