import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/patients/home/home.component';
import { NavbarComponent } from './components/includes/navbar/navbar.component';
import { SidebarComponent } from './components/includes/sidebar/sidebar.component';
import { LoginComponent } from './components/public/login/login.component';
import { DocumentsComponent } from './components/patients/documents/documents.component';
import { MessagesComponent } from './components/patients/messages/messages.component';
import { AppointmentComponent } from './components/patients/appointment/appointment.component';
import { UploadCenterComponent } from './components/patients/upload-center/upload-center.component';
import { SignUpComponent } from './components/public/sign-up/sign-up.component';
import { HomeProComponent } from './components/providers/home-pro/home-pro.component';
import { PatientsComponent } from './components/providers/patients/patients.component';
import { TeamComponent } from './components/providers/team/team.component';
import { InviteComponent } from './components/providers/invite/invite.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    SignUpComponent,
    DocumentsComponent,
    MessagesComponent,
    AppointmentComponent,
    UploadCenterComponent,
    HomeProComponent,
    PatientsComponent,
    TeamComponent,
    InviteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
