import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  filterKey: string = 'name';
  filterKeys: string[] = Object.keys(new Product());
  phrase: string = '';
  category: string[] = ['Kirándulások', 'Fürdőlátogatás'];
  currentProduct: Product = new Product();
  rows: number = 10;
  start: number = 0;
  end: number = this.start + this.rows;
  // groups: number[] = [];
  groups: number[] = [1,2,3,4,5,6];
  // groupNumber: any = this.productList$.subscribe(result => {console.log('length',result.length/this.rows)})


  // @Output() selectClick: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private productService: ProductService,
    private edit: ProdtableService,
  ) {
    // for (let i = 0; i < this.groupNumber.length; i += 1) {
    //   this.groups.push(i + 1);
    //   console.log(this.groups)
    // }
    // console.log('this.groupNumber',this.groupNumber.length)
    // console.log(this.phrase)
   }

   @Output() clicked: EventEmitter<boolean> = new EventEmitter();
  //  onUserClicked(): void {
  //   this.clicked.emit(true);
  // }

  pager(group: number): number {
    if (group <= 1) {
      group=1;
    }
    if (group >= this.groups.length+1) {
      group=this.groups.length;
    }
    if (this.phrase !== '') {
      this.start = 0;
    }
    console.log('(start+rows)/rows =', group)
    this.start = (group - 1) * this.rows;
    this.end = this.start + this.rows;
    this.productList$.subscribe(result => {console.log('length',result.length/this.rows)});
    console.log('group', group)
    console.log('this.start =', (group - 1) * this.rows)
    console.log('this.end =', this.end)
    return this.start, this.end;
  }

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
