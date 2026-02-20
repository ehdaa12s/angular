import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;

  private products: Product[] = [
    { id: 1, name: 'iPhone 15', price: 1200, category: 'Electronics' },
    { id: 2, name: 'Coffee Maker', price: 200, category: 'Kitchen' }
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  products$ = this.productsSubject.asObservable();

  private nextId = 3;

  addProduct(product: Omit<Product, 'id'>) {
    const newProduct = { ...product, id: this.nextId++ };
    this.products = [...this.products, newProduct];
    this.productsSubject.next(this.products);
  }

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
    this.productsSubject.next(this.products);
  }

  
}