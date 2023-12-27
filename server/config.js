import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('./.env') });

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'url-short',
    });
    console.log('db connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
