import { getProductsModel, postProductsModel } from '../models/productsModels';

type IProducts = {
  id: number,
  name: string,
  amount: string,
  orderId: number
};
export async function getProductsService() {
  const data = await getProductsModel();
  return { status: 200, data };
}

export async function postProductsService(newProduct: IProducts) {
  const data = await postProductsModel(newProduct);
  return { status: 201, data };
}