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

  //@Input() products: ProductCard[] = [];
  //@Input() card: any = new ProductCard;
  @Input() cards: any = new ProductService();
  //List: any = products; // Tömb kell!!!
  constructor() { }

  phrase: string = '';


  products: ProductService[] = this.cards.List;


  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }


  ngOnInit(): void {
  }

}


/**
 *
 *Ez a komponens hasonlóan működik mint a termék lapozó, de ez korlátlan számú terméket képes megjeleníteni.
 * - Működése: input tulajdonságként kapja meg a termékek tömbjét. Ezeket bejárva (*ngFor) minden terméket egy product-card komponenssel jelenít meg.
 * - Szűrés: generáljatok egy filter pipe -ot és azt alkalmazzátok a szűrésre.
 * > Legyen egy input mező a termékek felett (de ezen a komponensen belül).
 * > Amikor módosítják a taralmát, akkor módosuljon egy változó, pld: `phrase`.
 * > Ez a változó legyen átadva a filternek, ami ez alapján szűrje le a kapott termékek tömbjét. Ezt ott tudjátok alkalmazni, ahol az *ngFor bejárja a termékeket, pld:
 * ```html
 * <tr *ngFor="let product of products | filter:phrase">
 * ```
 * > Működő példa: `https://github.com/Training360/str-angular-002/tree/main/angular-components-pipes`
 *
 * Gabi ProductCard komponensét kell használni a megjelenítéshez
 */