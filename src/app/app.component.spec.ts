import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutModule } from 'modules/layout';
import { ProductSearchComponent } from 'product-search';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from 'product-ui';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        LayoutModule,
        ProductSearchComponent,
        HttpClientTestingModule,
        CartComponent,
      ],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  it('shoud contain header', () => {
    const header: HTMLHeadElement =
      fixture.nativeElement.querySelector('header');
    expect(header).toBeTruthy();
  });
});
