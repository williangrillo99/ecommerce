import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from 'product-data-access';

@Component({
  selector: 'lib-cart-list-product',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './cart-list-product.component.html',
  styleUrl: './cart-list-product.component.scss',
})
export class CartListProductComponent {
  @Input({ required: true }) product!: Product;
  @Output() OnRemoveProduct = new EventEmitter<Product>();

  removeProduct(product: Product) {
    this.OnRemoveProduct.emit(product);
  }
}
