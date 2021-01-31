import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import  Products from 'src/assets/products.json';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  list: any = Products;

  // list: Products[] = [];
 
  constructor() { }
}
