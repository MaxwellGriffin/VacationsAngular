import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { ItineraryEditComponent } from './components/itinerary/itinerary-edit/itinerary-edit.component';
import { DestinationCreateComponent } from './components/destination/destination-create/destination-create.component';
import { DestinationDetailComponent } from './components/destination/destination-detail/destination-detail.component';
import { DestinationEditComponent } from './components/destination/destination-edit/destination-edit.component';
import { Error404Component } from './components/error/error404/error404.component';
import { DestinationDeleteComponent } from './components/destination/destination-delete/destination-delete.component';
import { GroupIndexComponent } from './components/group/group-index/group-index.component';
import { GroupService } from './services/group.service';
import { GroupCreateComponent } from './components/group/group-create/group-create.component';
import { GroupDetailComponent } from './components/group/group-detail/group-detail.component';
import { GroupDeleteComponent } from './components/group/group-delete/group-delete.component';
import { GroupEditComponent } from './components/group/group-edit/group-edit.component';
import { Error403Component } from './components/error/error403/error403.component';
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
import { ItineraryDeleteComponent } from './components/itinerary/itinerary-delete/itinerary-delete.component';
import { SelecteddestinationIndexComponent } from './components/selecteddestination/selecteddestination-index/selecteddestination-index.component';
import { SelecteddestinationCreateComponent } from './components/selecteddestination/selecteddestination-create/selecteddestination-create.component';
import { SelecteddestinationDetailComponent } from './components/selecteddestination/selecteddestination-detail/selecteddestination-detail.component';
import { SelecteddestinationEditComponent } from './components/selecteddestination/selecteddestination-edit/selecteddestination-edit.component';
import { SelecteddestinationDeleteComponent } from './components/selecteddestination/selecteddestination-delete/selecteddestination-delete.component';

const routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'destination', canActivate: [AdminGuard], children: [
    { path: '', component: DestinationIndexComponent },
    { path: 'create', component: DestinationCreateComponent },
    { path: 'details/:id', component: DestinationDetailComponent },
    { path: 'edit/:id', component: DestinationEditComponent },
    { path: 'delete/:id', component: DestinationDeleteComponent }
  ]},
  { path: 'itinerary', canActivate: [LoginGuard], children: [
    { path: '', component: ItineraryIndexComponent },
    { path: 'create', component: ItineraryCreateComponent },
    { path: 'details/:id', component: ItineraryDetailComponent },
    { path: 'edit/:id', component: ItineraryEditComponent },
    { path: 'delete/:id', component: ItineraryDeleteComponent }
  ]},
  { 
    path: 'group', canActivate: [LoginGuard], children: [
    { path: '', component: GroupIndexComponent },
    { path: 'create', component: GroupCreateComponent},
    { path: 'detail/:id', component: GroupDetailComponent},
    { path: 'edit/:id', component: GroupEditComponent},
    { path: 'delete/:id', component: GroupDeleteComponent}
    ]
  },
  { path: '403forbidden', component: Error403Component },
  { path: '**', component: Error404Component },
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
    ItineraryDetailComponent,
    ItineraryEditComponent,
    DestinationCreateComponent,
    DestinationDetailComponent,
    DestinationEditComponent,
    Error404Component,
    DestinationDeleteComponent,

    GroupIndexComponent,
    GroupCreateComponent,
    GroupDetailComponent,
    GroupDeleteComponent,
    GroupEditComponent,
    Error403Component,
    ItineraryDeleteComponent,
    SelecteddestinationIndexComponent,
    SelecteddestinationCreateComponent,
    SelecteddestinationDetailComponent,
    SelecteddestinationEditComponent,
    SelecteddestinationDeleteComponent
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
    ItinerarysService,
    GroupService,
    LoginGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }