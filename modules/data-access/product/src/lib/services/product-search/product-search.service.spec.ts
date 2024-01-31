import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductSearchService } from './product-search.service';
import { Product } from '../../models/product.model';
import { mockProducts } from '../../mocks/product.mock';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(ProductSearchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return produts correctly', () => {
    //ARRANGE
    const mockName = 'notebook';
    const url = `${service.apiUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    // ACT
    service.searchByName(mockName).subscribe((products) => (result = products));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
  it('should return produts by id correctly', () => {
    //ARRANGE
    const mockId = '123';
    const url = `${service.apiUrl}/products/${mockId}`;
    let result!: Product;

    // ACT
    service.getById(mockId).subscribe((product) => (result = product));

    // ASSERT
    const request = httpMock.expectOne(url);
    request.flush(mockProducts[0]);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts[0]);
  });
});
