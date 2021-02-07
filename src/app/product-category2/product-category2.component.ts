import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { FilterPipe } from '../pipe/filter.pipe';
import { ProductScrollComponent } from '../product-scroll/product-scroll.component';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-category2',
  templateUrl: './product-category2.component.html',
  styleUrls: ['./product-category2.component.scss']
})
export class ProductCategory2Component implements OnInit {
  title: string[] = ['Fürdőlátogatás - kiemelt ajánlataink', 'Fürdőlátogatás - összes ajánlatunk'];
  productList$: Observable<Product[]> = this.productService.getAll();
  // activeRest: any = this.product.cards.List.filter(item => item.catid === 2);

  filter: FilterPipe = new FilterPipe();


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
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  // topFiveFeaturedProducts: any[] = this.activeRest.filter(product => product.featured)
  //   .sort(() => 0.5 - Math.random())
  //   .slice(0, 5);
  // ngOnInit(): void {
  // }



}
