import express from 'express';
// import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import router from './routes/indexRouter';

const app = express();

app.use(express.json());

app.use('/products', router);

export default app;
