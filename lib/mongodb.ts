'use server'
import mongoose from "mongoose";

const connection: { isConnected?: number } = {};
const dbURI = process.env.MONGODB_URI ?? '';

async function dbConnect() {
  if (connection.isConnected) return;

  const db = await mongoose.connect(dbURI);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
