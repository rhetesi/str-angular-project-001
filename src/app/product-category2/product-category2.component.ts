import { Component, OnInit } from '@angular/core';
import { ProductScrollComponent } from '../product-scroll/product-scroll.component';

@Component({
  selector: 'app-product-category2',
  templateUrl: './product-category2.component.html',
  styleUrls: ['./product-category2.component.scss']
})
export class ProductCategory2Component implements OnInit {
  title: string[] = ['Fürdőlátogatás - kiemelt ajánlataink', 'Fürdőlátogatás - összes ajánlatunk'];
  product: any = new ProductScrollComponent();
  activeRest: any = this.product.cards.List.filter(item => item.catid === 2 );
  constructor() { 
    // console.log('category: ', this.activeRest)
  }

  topFiveFeaturedProducts: any[] = this.activeRest.filter( product => product.featured )
  .sort( () => 0.5 - Math.random())
  .slice(0, 5);
  ngOnInit(): void {
  }



}
