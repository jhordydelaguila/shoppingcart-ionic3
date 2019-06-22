import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from '../models/product';
import { PRODUCTS, PRODUCTS_IN_PROMOTION } from '../models/product.mock';

@Injectable()
export class ProductService {

  constructor(public http: HttpClient) {
  }

  getProducts(): Observable<Product[]> {
    return Observable.of(PRODUCTS).map(o => o);
  }

  getProductsInPromotion(): Observable<Product[]> {
    return Observable.of(PRODUCTS_IN_PROMOTION).map(o => o);
  }

  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
