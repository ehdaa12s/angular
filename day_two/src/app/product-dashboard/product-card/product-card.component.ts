import { Component, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';           
import { Product } from '../../models/product.model';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,               
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>{{ product().name }}</mat-card-title>
        <mat-card-subtitle>{{ product().category }}</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="price">{{ product().price | number:'1.0-0' }} $</div>
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-icon-button color="warn" (click)="delete.emit(product().id)">
          <mat-icon>delete</mat-icon>
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`.price { font-size: 1.5rem; font-weight: bold; color: #2e7d32; margin: 1rem 0; }`]
})
export class ProductCardComponent {
  product = input.required<Product>();
  delete = output<number>();
}