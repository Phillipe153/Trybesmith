import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IProducts, Product } from '../interfaces/index';

export async function getProductsModel(): Promise<IProducts[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  
  const [data] = await connection.execute(query);
  
  return data as IProducts[];
}

export async function postProductsModel(newProduct: IProducts): Promise<Omit<Product, 'orderId'>> {
  const { name, amount } = newProduct;
  const query = `INSERT INTO Trybesmith.Products (name, amount)
  VALUES (?, ?)`;
  const [data] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId: id } = data;

  const productCreated = { id, ...newProduct };
  return productCreated;
}