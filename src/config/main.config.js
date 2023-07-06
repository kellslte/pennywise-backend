import * as dotenv from 'dotenv';
dotenv.config()

const config = {
  server: {
    port: parseInt(process.env.PORT),
  },
  db: process.env.MONGODB_URI,
  services: {
    mail: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: process.env.MAIL_SECURE,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    },
  },
};

export default config;