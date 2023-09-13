import { config } from 'dotenv';

config();

const { PORT } = process.env;

const configEnv = {
  port: PORT || 5000
};

export default configEnv;
