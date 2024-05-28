import mongoose, { Document, Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

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
  id: string;
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
  }
}, {
  timestamps: true,
  collection: 'Users'
});

export const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

//graphql
const UserTC = composeWithMongoose(UserModel, {});

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userCount: UserTC.getResolver('count')
});

schemaComposer.Mutation.addFields({
  userCreateOne: UserTC.getResolver('createOne'),
  userUpdateById: UserTC.getResolver('updateById'),
  userUpdateOne: UserTC.getResolver('updateOne')
});

export const graphqlSchema = schemaComposer.buildSchema();
