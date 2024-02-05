import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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

  getCartList(): Observable<Product[]> {
    return this.cartSubject.asObservable();
  }

  removeProduct(product: Product) {
    const card = this.cartSubject
      .getValue()
      .filter((x) => x.name != product.name);
    this.cartSubject.next(card);
  }
}
