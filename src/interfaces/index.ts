export interface IProducts {
  name: string,
  amount: string,
}
export interface Product extends IProducts {
  id: number,
  orderId: number
}

export interface IUsers {
  username: string,
  classe: string,
  level: number,
  password: string,
}
export interface User extends IUsers {
  id: number
}

export interface IOrders {
  id: number,
  userId: number,
  productsIds: number[]
}