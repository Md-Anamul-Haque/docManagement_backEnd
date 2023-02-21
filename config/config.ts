import dotenv from 'dotenv';
dotenv.config();

const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    url: process.env.MONGO_URL,
  },
};

export default config;