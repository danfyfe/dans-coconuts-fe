import mongoose, { Document, Schema } from 'mongoose';
// import { User } from 'next-auth';

export type ISignUpParams = {
  email: string;
  username: string;
  password: string;
}

export type ISignInParams = {
  email: string;
  password: string;
}

export type IUser = {
  email: string;
  username: string;
  image?: string;
}
export interface IUserModel extends Document {
  email: string;
  username: string;
  image?: string;
  password?: string;
}

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true
  },
  username: {
    type: String,
    trim: true,
    required: true
  },
  image: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  }
}, {
  timestamps: true,
  collection: 'Users'
});

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
