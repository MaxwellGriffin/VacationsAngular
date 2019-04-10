//This file is where all the routing is done
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components here
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//Add routes here
const routes: Routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}