import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartListProductComponent } from './cart-list-product.component';
import { mockProducts } from 'product-data-access';

describe('CartListProductComponent', () => {
  let component: CartListProductComponent;
  let fixture: ComponentFixture<CartListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartListProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartListProductComponent);
    component = fixture.componentInstance;
    component.product = mockProducts[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
