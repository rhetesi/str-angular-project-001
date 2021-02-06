import {​​​​​ Component, Input, OnInit }​​​​​ from '@angular/core';
import { Observable } from 'rxjs';
// import {​​​​​ ProductCardComponent }​​​​​ from 'src/app/product-card/product-card.component';
import {​​​​​ ProductService }​​​​​ from 'src/app/service/product.service';
import { Product } from '../model/product';
import { RandomizePipe } from '../pipe/randomize.pipe';
import { CategoryPipe } from '../pipe/category.pipe';
// import {​​​​​ CurrencyComponent }​​​​​ from 'src/app/currency/currency.component';
// import category from 'src/assets/category.json';
// import {​​​​​ CurrencyComponent }​​​​​ from 'src/app/currency/currency.component';
// import {​​​​​ CurrencyPipe }​​​​​ from '../currency.pipe';
@Component({​​​​​
  selector: 'app-product-scroll',
  templateUrl: './product-scroll.component.html',
  styleUrls: ['./product-scroll.component.scss']
}​​​​​)
export class ProductScrollComponent implements OnInit {​​​​​

  productList$: Observable<Product[]> = this.productService.getAll();


  // @Input() cards: any = new ProductService();

  // @Input() currency: CurrencyComponent = [];
  // currency: CurrencyPipe = new CurrencyPipe();
  title: string[] = ['Kiemelt ajánlataink', 'Akciós ajánlataink'];

  constructor(
    private productService: ProductService,
  ) {​​​​​
    console.log('scroll', this.productList$)
  }​​​​​
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // topFiveFeaturedProducts: ProductService[] = this.productList$.filter( product => product.featured )
  //   .sort( () => 0.5 - Math.random())
  //   .slice(0, 5);

  // topFiveSaleProducts: ProductService[] = this.cards.List.filter( product => product.active )
  //   .sort( () => 0.5 - Math.random())
  //   .slice(0, 5);
  // ngOnInit(): void {​​​​​
  // }​​​​​
}​​​​​
