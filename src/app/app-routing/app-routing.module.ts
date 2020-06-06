import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../components/patients/home/home.component';
import { LoginComponent } from '../components/public/login/login.component';
import { DocumentsComponent } from '../components/patients/documents/documents.component';
import { MessagesComponent } from '../components/patients/messages/messages.component';
import { AppointmentComponent } from '../components/patients/appointment/appointment.component';
import { UploadCenterComponent } from '../components/patients/upload-center/upload-center.component';
import { SignUpComponent } from '../components/public/sign-up/sign-up.component';
import { HomeProComponent } from '../components/providers/home-pro/home-pro.component';
import { PatientsComponent } from '../components/providers/patients/patients.component';
import { TeamComponent } from '../components/providers/team/team.component';
import { InviteComponent } from '../components/providers/invite/invite.component';
import { EsignComponent } from '../components/providers/esign/esign.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'patient/home', component: HomeComponent },
  { path: 'patient/documents', component: DocumentsComponent },
  { path: 'patient/messages', component: MessagesComponent },
  { path: 'patient/appointment', component: AppointmentComponent },
  { path: 'patient/upload-center', component: UploadCenterComponent },
  { path: 'providers/', component: HomeProComponent },
  { path: 'providers/home', component: HomeProComponent },
  { path: 'providers/patient', component: PatientsComponent },
  { path: 'providers/team', component: TeamComponent },
  { path: 'providers/invite', component: InviteComponent },
  { path: 'providers/e-sign', component: EsignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
