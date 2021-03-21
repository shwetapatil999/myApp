import { CompanyModule } from './company/company.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

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
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './curd/posts/posts.component';
import { MyserviceService } from './myservice.service';

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
    HomeComponent,
    PostsComponent
  ],
  imports: [//// module = group of logic
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CompanyModule // Another module called herre called featuredc module
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log("called From Module");// class decorator
  }
 }
