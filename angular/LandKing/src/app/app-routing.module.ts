import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add your component here
import { RegistrationComponent } from './registration/registration.component';  // Add your component here
import { SigninComponent } from './signin/signin.component'

//This is my case 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reg',
    component: RegistrationComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,RegistrationComponent];
