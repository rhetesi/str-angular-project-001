import {​​​​​ Component, Input, OnInit }​​​​​ from '@angular/core';
// import {​​​​​ ProductCardComponent }​​​​​ from 'src/app/product-card/product-card.component';
import {​​​​​ ProductService }​​​​​ from 'src/app/service/product.service';
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
  // @Input() card: any = new ProductCardComponent();
  @Input() cards: any = new ProductService();
  // @Input() currency: CurrencyComponent = [];
  // currency: CurrencyPipe = new CurrencyPipe();
  title: string[] = ['Kiemelt ajánlataink', 'Akciós ajánlataink'];
  // category: string[] = ['featured', 'active'];
  // categories: any = category;
  
  constructor() {​​​​​
    // console.log(this.categories)
  }​​​​​
  
  topFiveFeaturedProducts: ProductService[] = this.cards.List.filter( product => product.featured )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);
  
  topFiveSaleProducts: ProductService[] = this.cards.List.filter( product => product.active )
    .sort( () => 0.5 - Math.random())
    .slice(0, 5);
  ngOnInit(): void {​​​​​
  }​​​​​
}​​​​​
