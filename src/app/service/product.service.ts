/* import { Injectable } from '@angular/core'; // EZ BIZTOS MŰKÖDIK!!!
import products from 'src/assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  List: any = products;

  constructor() { }
} */

import { Injectable } from '@angular/core';
import products from 'src/assets/products.json';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhhost:3000/products';

  List: any = products;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

}
