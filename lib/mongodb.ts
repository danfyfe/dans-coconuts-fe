'use server'
import mongoose from "mongoose";
import getErrorMessage from "./errors/getErrorMessage";

const connection: { isConnected?: number; db?: typeof mongoose } = {};
const dbURI = process.env.MONGODB_URI ?? '';

async function connectMongoDB() {
  if (connection.isConnected && connection.db) {
    console.log('Still connected to database.');
    return connection.db;
  };

  try {
    const db = await mongoose.connect(dbURI, {
      dbName: "dans-coconuts"
    });
    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to database.')
    return db;
  } catch (error) {
    const message = getErrorMessage(error);
    console.log('There was an error connecting to the database.', message)
  }

}

export default connectMongoDB;
