import { Request, Response } from 'express';

import getProductsService from '../services/productsServices';

export default async function getProductsController(_req: Request, res: Response) {
  const { status, data } = await getProductsService();
  res.status(status).json(data);    
}