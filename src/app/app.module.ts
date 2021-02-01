import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
// import { Cat04Component } from './page/cat04/cat04.component';
import { HomeComponent } from './page/home/home.component';
<<<<<<< HEAD
import { ProductCardComponent } from './product-card/product-card.component';
import { CurrencyPipe } from './currency.pipe';
import { CurrencyComponent } from './currency/currency.component';
=======
>>>>>>> 5af78e2e096498969c6ca4f9299eeae6a6b6b965
import { ProductScrollComponent } from './product-scroll/product-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
<<<<<<< HEAD
    ProductCardComponent,
    CurrencyPipe,
    CurrencyComponent,
=======
>>>>>>> 5af78e2e096498969c6ca4f9299eeae6a6b6b965
    ProductScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
