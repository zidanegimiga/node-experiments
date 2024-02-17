import mongoose from "mongoose";

const connection_uri: string | undefined = process.env.MONGODB_URI as
  | string
  | undefined;

async function dbConnect() {
  try {
    if (!connection_uri) {
      throw new Error(
        "MongoDB URI is not defined in the environment variables"
      );
    }

    await mongoose.connect(connection_uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", (error as Error).message);
  }
}

export default dbConnect;
