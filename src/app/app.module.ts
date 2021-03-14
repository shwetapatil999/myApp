import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { ProductsComponent } from './layouts/products/products.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SamComponent } from './products/sam/sam.component';
import { NokiyaComponent } from './products/nokiya/nokiya.component';
import { RealmeComponent } from './products/realme/realme.component';
import { PagenofoundComponent } from './products/pagenofound/pagenofound.component';
import { HomeComponent } from './products/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    FooterComponent,
    SamComponent,
    NokiyaComponent,
    RealmeComponent,
    PagenofoundComponent,
    HomeComponent
  ],
  imports: [//// module = group of logic
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
