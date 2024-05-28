import mongoose, { Document, Schema } from 'mongoose';

const CoconutSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  users: {
    type: Array,
    default: []
  }
});

export const Coconut = mongoose.models.Coconut || mongoose.model("Project", CoconutSchema);
