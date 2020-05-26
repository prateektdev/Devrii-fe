import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { DocumentsComponent } from '../components/documents/documents.component';
import { MessagesComponent } from '../components/messages/messages.component';
import { AppointmentComponent } from '../components/appointment/appointment.component';
import { UploadCenterComponent } from '../components/upload-center/upload-center.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'upload-center', component: UploadCenterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
