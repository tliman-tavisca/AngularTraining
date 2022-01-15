export interface Product {
  name: string;
  id: number;
  price: number;
}

export interface Item {
  product_id: number;
  quantity: number;
}
