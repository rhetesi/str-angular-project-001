import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { CurrencyPipe } from '../currency.pipe';
import { CurrencyComponent } from '../currency/currency.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = new Product();
  @Input() curr: CurrencyPipe = new CurrencyPipe();
  // @Input() curr: CurrencyComponent = new CurrencyComponent();
  constructor() { }
  
  
  currency:string;
  
  receiveCurrency($event) {
    this.currency = $event
    console.log('click:',this.currency);
  }

  ngOnInit(): void {
  }

}
