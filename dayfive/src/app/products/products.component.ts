import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../services/product.service';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HighlightDirective],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  newProduct = { name: '', price: 0, description: '' };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price && this.newProduct.description) {
      this.productService.addProduct(this.newProduct);
      this.products = this.productService.getProducts();
      this.newProduct = { name: '', price: 0, description: '' };
    }
  }
}