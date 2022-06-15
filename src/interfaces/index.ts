export interface IProducts {
  name: string,
  amount: string,
}
export interface Product extends IProducts {
  id: number,
  orderId: number

}