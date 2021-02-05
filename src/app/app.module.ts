import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
// import { Cat04Component } from './page/cat04/cat04.component';
import { HomeComponent } from './page/home/home.component';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './pipe/filter.pipe';
import { ProductCardComponent } from './product-card/product-card.component';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyComponent } from './currency/currency.component';
import { ProductScrollComponent } from './product-scroll/product-scroll.component';
import { ProductCategory1Component } from './product-category1/product-category1.component';
import { ProductCategory2Component } from './product-category2/product-category2.component';
import { AdminComponent } from './page/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ListComponent,
    FilterPipe,
    ProductScrollComponent,
    ProductCardComponent,
    CurrencyPipe,
    CurrencyComponent,
    ProductScrollComponent,
    ProductCategory1Component,
    ProductCategory2Component,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
