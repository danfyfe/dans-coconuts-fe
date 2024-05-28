import mongoose, { Document, Schema } from 'mongoose';

const ProjectSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  percent_completed: {
    type: Number,
    default: 0
  },
  organization: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    default: []
  },
  users: {
    type: Array,
    default: []
  }
});

export const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
