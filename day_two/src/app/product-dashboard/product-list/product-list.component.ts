import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, ProductCardComponent],
  template: `
    <div class="product-grid">
      @for (product of products(); track product.id) {
        <app-product-card 
          [product]="product"
          (delete)="productDeleted.emit($event)" />
      } @empty {
        <p class="empty">No products yet</p>
      }
    </div>
  `,
  styles: [`
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 1.5rem; }
    .empty { text-align: center; color: #777; padding: 3rem; }
  `]
})
export class ProductListComponent {
  products = input.required<Product[]>();
  productDeleted = output<number>();
}