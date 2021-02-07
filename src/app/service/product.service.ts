/* import { Injectable } from '@angular/core'; // EZ BIZTOS MŰKÖDIK!!!
import products from 'src/assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  List: any = products;

  constructor() { }
} */

// import: Product, HttpClient, Observable
import { Injectable } from '@angular/core';
//import products from 'src/assets/products.json'; - ehelyett { Product } import
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // add apiUrl
  apiUrl: string = 'http://localhhost:3000/products';

  //List: any = products;

  //
  constructor(
    private http: HttpClient,
  ) { }

  //getAll - read All
  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  //getOne
  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

//add
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
  //update
  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  //remove
  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

}
