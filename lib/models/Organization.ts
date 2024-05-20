import mongoose, { Document, Schema } from 'mongoose';
import { User } from './User';

export interface IOrganization extends Document {
  title: string;
  users: User[]
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
});

const Organization = mongoose.model<IOrganization>("Organization", organizationSchema);

export default Organization;
