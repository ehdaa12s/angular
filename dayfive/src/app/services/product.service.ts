import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
    { id: 2, name: 'Mouse', price: 29, description: 'Wireless mouse' },
    { id: 3, name: 'Keyboard', price: 79, description: 'Mechanical keyboard' }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  addProduct(product: Omit<Product, 'id'>): void {
    const newId = Math.max(...this.products.map(p => p.id), 0) + 1;
    this.products.push({ ...product, id: newId });
  }
}