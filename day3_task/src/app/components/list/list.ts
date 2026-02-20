import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Product } from '@app/types/product';

@Component({
  selector: 'app-list',
  imports: [CurrencyPipe],
  templateUrl: './list.html',
})
export class List {
  @Input() products: Product[] = [];
  @Input() favouriteId: number | null = null;
  @Output() delete = new EventEmitter<number>();
  @Output() favourite = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Product>();

  deleteProduct(id: number) {
    this.delete.emit(id);
  }

  favouriteProduct(id: number) {
    this.favourite.emit(id);
  }

  editProduct(product: Product) {
    this.edit.emit(product);
  }
}
