import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { NotificationService } from './services/notification.service';


@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {

  products: Product[] = [];
  favoriteProduct?: Product;

  newProduct: Omit<Product, 'id'> = { name: '', price: 0, category: '' };

  constructor(
    private productService: ProductService,
    private notify: NotificationService
  ) {}

  ngOnInit() {
    this.productService.products$.subscribe(prods => {
      this.products = prods;
      this.favoriteProduct = this.productService['getFavoriteProduct']();
    });
  }

  addProduct() {
    if (!this.newProduct.name || this.newProduct.price <= 0 || !this.newProduct.category) {
      this.notify.warning('Please fill all fields correctly');
      return;
    }

    this.productService.addProduct(this.newProduct);
    this.notify.success(`Added ${this.newProduct.name}`);

    
    this.newProduct = { name: '', price: 0, category: '' };
  }

  deleteProduct(id?: number) {
    if (!id) return;
    this.productService.deleteProduct(id);
    this.notify.error('Product deleted');
  }

  toggleFavorite(id?: number) {
    if (!id) return;
    this.productService['toggleFavorite'](id);
    const prod = this.products.find(p => p.id === id);
    if (prod?.isFavorite) {
      this.notify.success(`${prod.name} added to favorites`);
    } else {
      this.notify.info(`${prod?.name} removed from favorites`);
    }
  }
}