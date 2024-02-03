import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();
  // BehaviorSubject x Subject = Diferença entre eles é o valor inicial, o subject não precisa

  productQuantity$ = this.cartSubject.pipe(map((products) => products.length));

  addToCart(product: Product) {
    const card = this.cartSubject.getValue();
    this.cartSubject.next([...card, product]); //Adiciona na lista
  }
}
