import mongoose, { Document, Schema } from 'mongoose';

const TaskSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  project: {
    type: Array,
    default: []
  },
  users: {
    type: Array,
    default: []
  }
});

export const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);
