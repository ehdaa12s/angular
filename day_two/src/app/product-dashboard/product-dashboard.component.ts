import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NotificationService } from '../services/notification.service';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {

  products = signal<Product[]>([]);

  form = signal({
    name: '',
    price: 0,
    category: '',
    isFavorite: false
  });

  private idCounter = 1;

  constructor(private notify: NotificationService) {}

  addProduct() {
    const val = this.form();

    if (!val.name.trim() || val.price <= 0 || !val.category.trim()) {
      this.notify.warning("Please fill name, price (>0) and category");
      return;
    }

    const newProduct: Product = {
      id: this.idCounter++,
      name: val.name.trim(),
      price: Number(val.price),
      category: val.category.trim()
    };

    this.products.update(current => [...current, newProduct]);
    this.notify.success(`Added ${newProduct.name}`);

  
    this.form.set({ name: '', price: 0, category: '' , isFavorite: false});
  }

  deleteProduct(id: number) {
    this.products.update(current => current.filter(p => p.id !== id));
    this.notify.success('Product deleted');
  }
}