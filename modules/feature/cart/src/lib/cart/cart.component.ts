import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListProductComponent } from 'cart-ui';
import { CartService, Product } from 'product-data-access';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'lib-cart',
  standalone: true,
  imports: [CommonModule, CartListProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  cart$!: Observable<Product[]>;

  constructor(
    public cartService: CartService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cart$ = this.cartService.getCartList();
  }

  removeProduct(product: Product) {
    this.cartService.removeProduct(product);
    this._snackBar.open(
      `Removido, ${product.name} foi removido do carrinho`,
      'Fechar',
      {
        duration: 5000,
      }
    );
  }
}
