import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IOrganization extends Document {
  title: string;
  users: IUser[]
}

const OrganizationSchema: Schema = new mongoose.Schema({
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
  collection: 'Organizations'
});

export const Organization = mongoose.models.Organization || mongoose.model("Organization", OrganizationSchema);

