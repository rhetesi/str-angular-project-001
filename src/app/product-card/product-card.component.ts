import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { CurrencyPipe } from '../currency.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any = new Product();
  currency: CurrencyPipe = new CurrencyPipe();
  constructor() { }
  
  ngOnInit(): void {
  }

}
