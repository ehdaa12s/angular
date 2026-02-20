import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Product, ProductCreate } from '@app/types/product';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
})
export class Form {
  @Input() error: string | null = null;
  @Input() editProduct: Product | null = null;
  @Output() productAdded = new EventEmitter<ProductCreate>();
  @Output() productUpdated = new EventEmitter<Product>();
  @Output() cancelEdit = new EventEmitter<void>();

  submit(name: string, price: string) {
    if (this.editProduct) {
      this.productUpdated.emit({ ...this.editProduct, name, price: Number(price) });
    } else {
      this.productAdded.emit({ name, price: Number(price) });
    }
  }
}
