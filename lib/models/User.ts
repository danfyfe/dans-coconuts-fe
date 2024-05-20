import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  email: string;
  name: string;
}