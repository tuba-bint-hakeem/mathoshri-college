
import mongoose from "mongoose";

 const connectDB = async (dburl,dbname) => {
  try {
    const conn = await mongoose.connect(`${dburl}${dbname}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    
  }     

};

export default connectDB;