import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { BannerComponent } from './banner/banner.component';
import { HomecontentComponent } from './home/homecontent/homecontent.component';
import { InfobannerComponent } from './infobanner/infobanner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    BannerComponent,
    HomecontentComponent,
    InfobannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
