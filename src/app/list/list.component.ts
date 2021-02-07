import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { Product } from '../model/product';
import { FilterPipe } from '../pipe/filter.pipe';
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
  filter: FilterPipe = new FilterPipe();

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


