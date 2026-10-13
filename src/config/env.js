import dotenv from 'dotenv';

dotenv.config();

export const env = {
port: process.env.PORT,
db_uri: process.env.DATABASE_URI
};