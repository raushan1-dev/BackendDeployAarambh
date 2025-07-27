import dotenv from "dotenv";

dotenv.config();

const { BASE_URL,MONGO_URI } = process.env;

export const _config = {
  BASE_URL,
  MONGO_URI
};