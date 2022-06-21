// import { ResultSetHeader } from 'mysql2';
import { IOrders } from '../interfaces';

import connection from './connection';

export default async function getOrdersModel(): Promise<IOrders[]> {
  const query = `SELECT ord.id as id, ord.userId as userId, JSON_ARRAYAGG(pro.id) as productsIds 
  FROM Trybesmith.Orders as ord
  inner join Trybesmith.Products as pro
  on ord.id = pro.orderId
  group by ord.id
  order by ord.userId
  `;
  
  const [data] = await connection.execute(query);
  console.log(data);
  
  return data as IOrders[];
}
