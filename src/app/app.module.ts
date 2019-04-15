import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


=======
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> a22c70f5786e6e2969786c8427c5ebcc33cd9028
import { AppComponent } from './app.component';
<<<<<<< HEAD

=======
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
>>>>>>> 53e816de63972c79a508534bccfc50f7e2b6f7de
import { HeaderComponent } from './components/header/header.component';
<<<<<<< HEAD
=======
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule,  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import {DestinationsService} from './services/destinations.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DestinationIndexComponent } from './components/destination/destination-index/destination-index.component';

const routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination', component: DestinationIndexComponent },
  { path: '**', component: RegistrationComponent }
];
>>>>>>> a22c70f5786e6e2969786c8427c5ebcc33cd9028

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
<<<<<<< HEAD

=======
    HeaderComponent,
    RegistrationComponent,
    LoginComponent,
    DestinationIndexComponent
  ],
>>>>>>> a22c70f5786e6e2969786c8427c5ebcc33cd9028
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
