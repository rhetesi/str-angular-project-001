import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { FilterPipe } from '../pipe/filter.pipe';
import { ProdtableService } from '../service/prodtable.service';
import { IProdTableCol } from '../service/prodtable.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-data-editor',
  templateUrl: './data-editor.component.html',
  styleUrls: ['./data-editor.component.scss']
})
export class DataEditorComponent implements OnInit {

  productList$: Observable<Product[]> = this.productService.getAll();
  cols: IProdTableCol[] = this.edit.prodTableCols;
  filter: FilterPipe = new FilterPipe();
  phrase: string = '';
  category: string[] = ['Kirándulások', 'Fürdőlátogatás'];
  currentProduct: Product = new Product();

  constructor(
    private productService: ProductService,
    private edit: ProdtableService,
  ) { }

  onSelect(product: any): void {
    this.currentProduct = product;
  }

  onUpdate(product: any): void {
    this.productService.update(product).subscribe(
      updatedProduct => console.log(updatedProduct)
    );
  }

  onDelete(product: any): void {
    this.productService.remove(product).subscribe(
      (updatedProduct) => console.log('deleted', updatedProduct)
    );
  }

  onChangePhrase(event: Event): void {
    this.phrase = (event.target as HTMLInputElement).value;
  }

  ngOnInit(): void {
  }

}
