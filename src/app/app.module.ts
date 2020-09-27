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
import { EsignComponent } from './components/providers/esign/esign.component';
import { NewRxComponent } from './components/labs/new-rx/new-rx.component';
import { ProviderComponent } from './components/providers/provider/provider.component';
import { SecondNavbarComponent } from './components/includes/second-navbar/second-navbar.component';
import { ProviderUploadComponent } from './components/providers/provider-upload/provider-upload.component';
import { ProvidersDocumentsComponent } from './components/providers/providers-documents/providers-documents.component';
import { ProvidersMessagesComponent } from './components/providers/providers-messages/providers-messages.component';
import { ComingSoonComponent } from './components/public/coming-soon/coming-soon.component';
import { DialogComponent } from './components/includes/dialog/dialog.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { ToastrModule } from 'ngx-toastr';
import { VideoCallComponent } from './components/providers/video-call/video-call.component';

/**
 * Custom angular notifier options
 */
const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right',
      distance: 12
    },
    vertical: {
      position: 'top',
      distance: 12,
      gap: 10
    }
  },
  theme: 'material',
  behaviour: {
    autoHide: 5000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease'
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50
    },
    shift: {
      speed: 300,
      easing: 'ease'
    },
    overlap: 150
  }
};

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
    InviteComponent,
    EsignComponent,
    NewRxComponent,
    ProviderComponent,
    SecondNavbarComponent,
    ProviderUploadComponent,
    ProvidersDocumentsComponent,
    ProvidersMessagesComponent,
    ComingSoonComponent,
    DialogComponent,
    VideoCallComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    MaterialModule,
    NotifierModule.withConfig(customNotifierOptions),
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
