import getProductsModel from '../models/productsModels';

export default async function getProductsService() {
  const data = await getProductsModel();
  return { status: 200, data };
}