import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IOrganization extends Document {
  title: string;
  users: IUser[]
}

const organizationSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  users: {
    type: Array
  }
}, {
  timestamps: true,
  collections: 'Organizations'
});

const Organization = mongoose.model<IOrganization>("Organization", organizationSchema);

export default Organization;
