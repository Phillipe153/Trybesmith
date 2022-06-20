import { Request, Response } from 'express';
import { Product } from '../interfaces/index';

import { getProductsService, postProductsService } from '../services/productsServices';

// type IProducts = {
//   id: number,
//   name: string,
//   amount: string,
//   orderId: number
// };
export async function getProductsController(_req: Request, res: Response) {
  const { status, data } = await getProductsService();
  res.status(status).json(data);    
}
export async function postProductsController(req: Request, res: Response) {
  const newProduct = req.body as Product;
  const { status, data } = await postProductsService(newProduct);
  res.status(status).json(data);    
}