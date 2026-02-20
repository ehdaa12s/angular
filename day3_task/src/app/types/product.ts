export interface Product {
  id: number;
  name: string;
  price: number;
}

export type ProductCreate = Omit<Product, 'id'>;
