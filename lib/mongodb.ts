'use server'
import mongoose from "mongoose";
import getErrorMessage from "./errors/getErrorMessage";

const connection: { isConnected?: number } = {};
const dbURI = process.env.MONGODB_URI ?? '';

async function connectMongoDB() {
  // TODO: look into why this is causing an issue with search input for users
  // if (connection.isConnected) {
  //   console.log('Still connected to database.');
  //   return
  // };

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
