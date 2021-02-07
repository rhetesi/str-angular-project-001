import { Injectable } from '@angular/core';

export interface IProdTableCol {
  key: string;
  text: string;
  editable: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProdtableService {

  prodTableCols: IProdTableCol[] = [
    {key: 'id', text: '#', editable: false},
    {key: 'catId', text: 'Kategória ID', editable: true},
    {key: 'name', text: 'Név', editable: true},
    {key: 'description', text: 'Leírás', editable: false},
    {key: 'image', text: 'Kép', editable: true},
    {key: 'price', text: 'Ár', editable: true},
    {key: 'stock', text: 'Készlet', editable: true},
    {key: 'featured', text: 'Kiemelt', editable: true},
    {key: 'active', text: 'Aktív?', editable: true},
  ];
  constructor() { }
}
