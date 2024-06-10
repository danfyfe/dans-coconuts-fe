import mongoose, { Document, Schema } from 'mongoose';
import { MongoDataSource } from "apollo-datasource-mongodb";
import { ObjectId } from "mongodb";
import getErrorMessage from '@/lib/errors/getErrorMessage';
import bcryptjs from "bcryptjs";

export type ISignUpParams = {
  email: string;
  username: string;
  password: string;
  image?: string;
}

export type ISignInParams = {
  email: string;
  password: string;
}

export type IUser = {
  email: string;
  username: string;
  image?: string;
  _id: string;
  organizations: []
}
export interface IUserModel extends Document {
  _id: ObjectId;
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
  },
  organizations: {
    type: Array,
    default: []
  },
  projects: {
    type: Array,
    default: []
  },
  tasks: {
    type: Array,
    default: []
  },
  coconuts: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  collection: 'Users'
});

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export class Users extends MongoDataSource<IUserModel> {
  async createUser({ email, username, password, image }: ISignUpParams) {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    try {
      return  await UserModel.create({ 
        email,
        username,
        password: hashedPassword,
        image
      });
      // return NextResponse.json({
      //   success: true,
      //   data: user
      // });
    } catch (error) {
      const message = getErrorMessage(error);
      console.log("Error in create user: ", message)
      throw new Error("Failed to make user.")
      // return NextResponse.json({ error: message, success: false });
    }
  }
}