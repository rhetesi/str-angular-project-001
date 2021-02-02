import { Component, OnInit } from '@angular/core';
import { ProductScrollComponent } from '../product-scroll/product-scroll.component';

@Component({
  selector: 'app-product-category1',
  templateUrl: './product-category1.component.html',
  styleUrls: ['./product-category1.component.scss']
})
export class ProductCategory1Component implements OnInit {
  title: string[] = ['Kirándulások - kiemelt ajánlataink', 'Kirándulások - összes ajánlatunk'];
  product: any = new ProductScrollComponent();
  activeRest: any = this.product.cards.List.filter(item => item.catid === 1 );
  constructor() { 
    // console.log('category: ', this.activeRest)
  }

  topFiveFeaturedProducts: any[] = this.activeRest.filter( product => product.featured )
  .sort( () => 0.5 - Math.random())
  .slice(0, 5);
  ngOnInit(): void {
  }

}