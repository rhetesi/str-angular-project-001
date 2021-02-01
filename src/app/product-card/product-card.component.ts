import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

// import products from 'src/assets/products.json';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  // List: any = products;
  product: any = new Product();

  ngOnInit(): void {
  }

}
