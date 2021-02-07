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
    {key: 'catId', text: 'Kategória', editable: true},
    {key: 'name', text: 'Név', editable: true},
    {key: 'description', text: 'Leírás', editable: true},
    {key: 'image', text: 'Kép', editable: true},
    {key: 'price', text: 'Ár (Ft)', editable: true},
    {key: 'stock', text: 'Készlet', editable: true},
    {key: 'featured', text: 'Kiemelt', editable: true},
    {key: 'active', text: 'Akció', editable: true},
  ];
  constructor() { }
}
