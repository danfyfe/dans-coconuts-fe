import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  email: string;
}

export type User = {
  email: string;
}
