import { ProductSearchService, mockProducts } from 'product-data-access';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';
@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit(): void {
    this.products$ = this.control.valueChanges.pipe(
      // COLOCAR OPERADORES!
      debounceTime(400), //FILTRAR TODOS OS VALORES NESSE TEMPO
      distinctUntilChanged(), //VERIFICA SE O VALOR É O MESMO ANTERIOR
      filter((value) => value.length > 1), //APENAS VALORES MAIS QUE 1
      switchMap((value) => this.productSearchService.searchByName(value)) //MUDA O SUBSCRIBE
    );
  }
}
