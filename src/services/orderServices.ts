import getOrdersModel from '../models/ordersModel';

export default async function getOrdersService() {
  const data = await getOrdersModel();
  return { status: 200, data };
}
