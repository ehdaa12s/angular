import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  template: `
    <div class="form-row">
      <mat-form-field>
        <mat-label>Name</mat-label>
        <input matInput [(ngModel)]="newProduct.name">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Price</mat-label>
        <input matInput type="number" [(ngModel)]="newProduct.price">
      </mat-form-field>

      <mat-form-field>
        <mat-label>Category</mat-label>
        <input matInput [(ngModel)]="newProduct.category">
      </mat-form-field>

     <button mat-raised-button color="primary" 
        (click)="add()" 
        [disabled]="!isValid">
  Add
</button>
    </div>
  `,
  styles: [`.form-row { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }`]
})
export class ProductFormComponent {
newProduct = { name: '', price: 0, category: '' };

  productAdded = output<Omit<Product, 'id'>>();


  get isValid(): boolean {
    return !!this.newProduct.name?.trim() &&
           Number(this.newProduct.price) > 0 &&
           !!this.newProduct.category?.trim();
  }

  add() {
    if (this.isValid) {
      this.productAdded.emit({ ...this.newProduct });
      this.newProduct = { name: '', price: 0, category: '' };
    }
  }
}