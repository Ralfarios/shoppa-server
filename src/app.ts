if (process.env.NODE_ENV === 'development') require('dotenv').config();

import cors from 'cors';
import express from 'express';

import { errorHandlers } from './middlewares/errorHandlers';
import router from './routers/index';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandlers);

export default app;
