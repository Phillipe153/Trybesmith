import connection from './connection';

type Products = {
  id: number,
  name: string,
  amount: string,
  orderId: number
};

export default async function getProductsModel(): Promise<Products[]> {
  const query = 'SELECT * FROM Trybesmith.Products;';
  
  const [data] = await connection.execute(query);
  
  return data as Products[];
}