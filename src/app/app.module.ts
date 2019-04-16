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
import {ItinerarysService} from './services/itinerarys.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { DestinationIndexComponent } from './components/destination/destination-index/destination-index.component';
import { ItineraryIndexComponent } from './components/itinerary/itinerary-index/itinerary-index.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ItineraryCreateComponent } from './components/itinerary/itinerary-create/itinerary-create.component';
import { ItineraryDetailComponent } from './components/itinerary/itinerary-detail/itinerary-detail.component';


const routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination', component: DestinationIndexComponent },
  { path: 'itinerary', component: ItineraryIndexComponent },

  { path: 'itinerary/create', component: ItineraryCreateComponent },

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
    ItineraryIndexComponent,
    ItineraryCreateComponent,
    ItineraryDetailComponent
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
    DestinationsService,
    ItinerarysService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
