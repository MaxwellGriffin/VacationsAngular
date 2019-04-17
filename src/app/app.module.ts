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
import { Error404Component } from './components/error404/error404.component';
import { NoteDeleteComponent } from './components/note/note-delete/note-delete.component';
import { DestinationDeleteComponent } from './components/destination/destination-delete/destination-delete.component';

import { GroupIndexComponent } from './compponents/group/group-index/group-index.component';
import { GroupService } from './services/group.service';
import { GroupCreateComponent } from './components/group/group-create/group-create.component';
import { GroupDetailComponent } from './components/group/group-detail/group-detail.component';
import { GroupDeleteComponent } from './components/group/group-delete/group-delete.component';
import { GroupEditComponent } from './components/group/group-edit/group-edit.component';



const routes = [
  { path: '', component: HomeComponent }, //will default to home when opened
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },

  { path: 'destination', children: [
    { path: '', component: DestinationIndexComponent },
    { path: 'create', component: DestinationCreateComponent },
    { path: 'details/:id', component: DestinationDetailComponent },
    { path: 'edit/:id', component: DestinationEditComponent },
    { path: 'delete/:id', component: DestinationDeleteComponent }
  ]},
  { path: '**', component: Error404Component }
  ];

  { path: 'destination', component: DestinationIndexComponent },
  { 
    path: 'group', children: [
    { path: '', component: GroupIndexComponent },
    { path: 'create', component: GroupCreateComponent},
    { path: 'detail/:id', component: GroupDetailComponent},
    { path: 'edit/:id', component: GroupEditComponent},
    { path: 'delete/:id', component: GroupDeleteComponent}
    ]
  },
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
    DestinationEditComponent,
    Error404Component,
    NoteDeleteComponent,
    DestinationDeleteComponent

    GroupIndexComponent,
    GroupCreateComponent,
    GroupDetailComponent,
    GroupDeleteComponent,
    GroupEditComponent

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
    GroupService
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
