import { MatCardModule } from '@angular/material/card';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from 'product-data-access';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
