import { Request, Response, NextFunction } from 'express';
import { IProducts } from '../interfaces/index';

function validateNewProduct(name: string, amount: string) {
  if (amount.length < 2) {
    return ({ status: 422, message: '"amount" length must be at least 3 characters long' });
  }
  if (typeof amount !== 'string') {
    return ({ status: 422, message: '"amount" must be a string' });
  }

  if (name.length < 2) {
    return ({ status: 422, message: '"name" length must be at least 3 characters long' });
  }
  if (typeof name !== 'string') {
    return ({ status: 422, message: '"name" must be a string' });
  }

  return null;
}

export default function postProductsMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { name, amount } = req.body as IProducts;

  if (!name) {    
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }

  const error = validateNewProduct(name, amount);
  console.log(error);
  
  if (error) {
    return res.status(error.status).json({ message: error.message });
  }
  next();
}
