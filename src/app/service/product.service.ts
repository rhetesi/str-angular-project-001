import { Injectable } from '@angular/core';
import products from 'src/assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  List: any = products;

  constructor() { }
}
