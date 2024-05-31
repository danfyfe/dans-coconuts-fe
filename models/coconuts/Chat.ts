import mongoose, { Document, Schema } from 'mongoose';

const CoconutChatSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  messages: {

  },
  users: {
    type: Array,
    default: []
  }
});

export const CoconutChat = mongoose.models.CoconutChat || mongoose.model("CoconutChat", CoconutChatSchema);

export interface ICoconutChatModel extends Document {
  content: string;
  title: string;
  users: string[];
}

export type ICoconutChat = {
  content: string;
  title: string;
  users: string[];
};
