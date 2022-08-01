import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { HomecontentComponent } from './home/homecontent/homecontent.component';
import { InfobannerComponent } from './infobanner/infobanner.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    BannerComponent,
    HomecontentComponent,
    InfobannerComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
