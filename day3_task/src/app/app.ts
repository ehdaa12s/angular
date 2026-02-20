import { Component } from '@angular/core';
import { Form } from './components/form/form';
import { List } from './components/list/list';
import { SwitchTask } from './components/switch-task/switch-task';
import type { Product, ProductCreate } from './types/product';

@Component({
  selector: 'app-root',
  imports: [Form, List, SwitchTask],
  templateUrl: './app.html',
})
export class App {
  products: Product[] = [];
  error: string | null = null;
  favouriteProductId: number | null = null;
  editingProduct: Product | null = null;

  onProductAdded(product: ProductCreate) {
    if (!product.name.trim()) {
      this.error = 'Please fill the name field.';
      return;
    }
    if (product.price === null || product.price === undefined || isNaN(product.price)) {
      this.error = 'Please fill the price field.';
      return;
    }
    if (product.price < 0) {
      this.error = 'Price must be a positive number.';
      return;
    }
    const exists = this.products.some(
      (p) => p.name.toLowerCase() === product.name.trim().toLowerCase(),
    );
    if (exists) {
      this.error = 'A product with this name already exists.';
      return;
    }
    this.error = null;
    this.products.push({
      id: this.products.length + 1,
      name: product.name.trim(),
      price: product.price,
    });
  }

  onProductDeleted(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
    if (this.favouriteProductId === id) {
      this.favouriteProductId = null;
    }
    if (this.editingProduct?.id === id) {
      this.editingProduct = null;
    }
  }

  onProductFavourited(id: number) {
    this.favouriteProductId = id;
  }

  onProductEdit(product: Product) {
    this.editingProduct = product;
    this.error = null;
  }

  onProductUpdated(product: Product) {
    if (!product.name.trim()) {
      this.error = 'Please fill the name field.';
      return;
    }
    if (isNaN(product.price) || product.price < 0) {
      this.error = 'Price must be a positive number.';
      return;
    }
    this.error = null;
    this.products = this.products.map((p) =>
      p.id === product.id ? { ...p, name: product.name.trim(), price: product.price } : p,
    );
    this.editingProduct = null;
  }

  onCancelEdit() {
    this.editingProduct = null;
    this.error = null;
  }
}
