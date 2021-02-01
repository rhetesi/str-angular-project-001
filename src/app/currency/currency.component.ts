import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import EventEmitter from 'events';
import {CurrencyPipe} from 'src/app/currency.pipe'

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  currencies = new CurrencyPipe();
  
  // message: string = "Hello!"

  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() {

    console.log(this.currencies.currencies);
  }

  onSelectCurrency(i:number): string {
    const curr: string = this.currencies.currencies[i];
    console.log(curr)
    this.messageEvent.emit(curr)
    return curr;
  }

  // sendMessage() {
  // }

  // @Output() curr: string;

  ngOnInit(): void {
  }

}
