import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../model/product';
import { Filter1Pipe } from '../pipe/filter1.pipe';
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

  //@Input() phraseString: string = ''; <- ez nem is kell, de nem tudom, hogy miért nem kell
  productList$: Observable<Product[]> = this.productService.getAll();
  filter: Filter1Pipe = new Filter1Pipe();

  constructor(
    private productService: ProductService,
  ) { }

  phrase: string = '';
  // products: ProductService[] = this.cards.List;

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }


  ngOnInit(): void {
  }

}


