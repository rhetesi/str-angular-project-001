import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Filter1Pipe } from '../pipe/filter1.pipe';
import { ProductScrollComponent } from '../product-scroll/product-scroll.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-category1',
  templateUrl: './product-category1.component.html',
  styleUrls: ['./product-category1.component.scss']
})
export class ProductCategory1Component implements OnInit {
  title: string[] = ['Kirándulások - kiemelt ajánlataink', 'Kirándulások - összes ajánlatunk'];
  productList$: Observable<Product[]> = this.productService.getAll();
  // activeRest: any = this.product.cards.List.filter(item => item.catid === 1);
  filter: Filter1Pipe = new Filter1Pipe();


  phrase: string = '';
  // products: ProductService[] = this.product.cards.List;

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }
  constructor(
    private productService: ProductService,
  ) {
    // console.log('category: ', this.activeRest)
  }

  // topFiveFeaturedProducts: any[] = this.activeRest.filter(product => product.featured)
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 5);

  ngOnInit(): void {
  }

}
