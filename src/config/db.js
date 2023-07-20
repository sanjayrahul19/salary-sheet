import mongoose from "mongoose";
import { config } from "dotenv";
config()

mongoose.set("strictQuery", true);

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    console.log(`DB connected ${db.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};


