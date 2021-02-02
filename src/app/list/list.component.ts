import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
//import { ProductCard } from 'src/app/product-card/product-card.component';

/**
 * teszteléshez direkt import, amit maj ki kell venni a végleges kódból
 */
//import products from 'src/assets/products.json';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() phraseString: string = '';
  @Input() cards: any = new ProductService();

  constructor() { }

  phrase: string = '';
  products: ProductService[] = this.cards.List;

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }


  ngOnInit(): void {
  }

}


