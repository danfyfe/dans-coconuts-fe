import mongoose, { Document, Schema } from 'mongoose';

const ProjectSchema: Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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
