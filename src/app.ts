import express from 'express';
import { errorHandler, notFound } from './middlewares';
import configEnv from './config/environment';
import router from './routers';
import 'express-async-errors';

const { port } = configEnv;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', router);

app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
