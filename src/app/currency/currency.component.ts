import { Component, Input, OnInit, Output } from '@angular/core';
import {CurrencyPipe} from 'src/app/currency.pipe'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  currencies = new CurrencyPipe();
  
  
  constructor() {

    console.log(this.currencies.currencies);
  }

  onSelectCurrency(i:number): string {
    const curr: string = this.currencies.currencies[i];
    console.log(curr)
    return curr;
  }

  @Output() curr: string;

  ngOnInit(): void {
  }

}