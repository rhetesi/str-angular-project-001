import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product';
import { IProdTableCol } from '../service/prodtable.service';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() delProduct: EventEmitter<Product> = new EventEmitter();
  category: string[] = ['Kirándulások', 'Fürdőlátogatás'];

  constructor(
    private productService: ProductService,
    // private edit: ProdtableService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(product: Product): void {
    this.delProduct.emit(product);
  }

}
