import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap } from 'rxjs';
import {
  CartService,
  Product,
  ProductSearchService,
} from 'product-data-access';
import { ProductCardComponent } from 'product-ui';
import { MatButtonModule } from '@angular/material/button';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';

function getParamsId(): Observable<string> {
  return inject(ActivatedRoute).params.pipe(map((params) => params['id']));
}
@Component({
  selector: 'lib-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    MatButtonModule,
    QuantityDescriptionPipe,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  constructor(
    private productSearchService: ProductSearchService,
    public cartService: CartService
  ) {}
  product$: Observable<Product> = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
