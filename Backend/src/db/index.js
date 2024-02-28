import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const ConnectDb = async () => {
  try {
    const ConnectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n Mongo Successfully connected to MongoDB...!:${ConnectInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error occurred while connecting to MongoDB:", error);
  }
};
export default ConnectDb;
