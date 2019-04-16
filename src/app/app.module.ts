import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import {DestinationsService} from './services/destinations.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DestinationIndexComponent } from './components/destination/destination-index/destination-index.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DestinationCreateComponent } from './components/destination/destination-create/destination-create.component';
import { DestinationDetailComponent } from './components/destination/destination-detail/destination-detail.component';
import { DestinationEditComponent } from './components/destination/destination-edit/destination-edit.component';

const routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination', children: [
    { path: '', component: DestinationIndexComponent },
    { path: 'create', component: DestinationCreateComponent },
    { path: 'details/:id', component: DestinationDetailComponent }
  ]},
  { path: '**', component: RegistrationComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    DestinationIndexComponent,
    DestinationCreateComponent,
    DestinationDetailComponent,
    DestinationEditComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService,
    DestinationsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
