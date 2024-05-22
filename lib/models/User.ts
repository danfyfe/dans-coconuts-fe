import mongoose, { Document, Schema } from 'mongoose';
import { User } from 'next-auth';

// export interface IUser extends Document {
//   email: string;
// }

export interface IUser extends User {
  email?: string;
  name?: string;
  admin?: boolean;
}
