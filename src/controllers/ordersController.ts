import { Request, Response } from 'express';
import getOrdersService from '../services/orderServices';

export default async function getOrdersController(_req: Request, res: Response) {
  const { status, data } = await getOrdersService();
  res.status(status).json(data);    
}
