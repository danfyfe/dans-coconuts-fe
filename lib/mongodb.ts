'use server'
import mongoose from "mongoose";
import getErrorMessage from "./errors/getErrorMessage";

const connection: { isConnected?: number } = {};
const dbURI = process.env.MONGODB_URI ?? '';

async function connectMongoDB() {
  if (connection.isConnected) return;

  try {
    const db = await mongoose.connect(dbURI, {
      dbName: "dans-coconuts"
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to database.')
  } catch (error) {
    const message = getErrorMessage(error);
    console.log('There was an error connecting to the database.', message)
  }

}

export default connectMongoDB;
