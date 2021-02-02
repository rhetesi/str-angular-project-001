import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Hazai turizmus';

  menuItems: IMenuItem[] = [
    { text: 'Főoldal', link: '/', icon: 'home' },
    { text: 'Kirándulások', link: '/cat01' },
    { text: 'Fürdőlátogatás', link: '/cat02' },
  ];

  constructor() { }
}
