import express, { Request, Response, NextFunction } from 'express';
import router from './routes/indexRouter';

const app = express();

app.use(express.json());

// app.use('/products', router);
app.use('/', router);

type Error = {
  status: number,
  message: string
};

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err.status) return res.status(err.status).json({ message: err.message });
  return res.status(500).json({ message: err.message });
});

export default app;
