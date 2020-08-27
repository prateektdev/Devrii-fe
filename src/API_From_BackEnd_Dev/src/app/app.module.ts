////This is app.module.ts file which needs to contain references.
////Register all xxx.service.ts here in the provider for accessebility.


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Entites Model references
import { AttachedFile, BusinessLogo, BusinessUserProfile, ConsentProviderName, 
  CreateNewEvent, DashboardAppStartup, DashboardBusinessStorage, DashboardCalendarEvents, 
  DashboardNetSpeed, DashboardSearchPerUser, DashboardUpcommingEventLinks, 
  DashboardUpcommingEventList, DashboradConfirmedApptment, DocumentIsArchive, DcoumentIsFaverite, 
  Message, MessageIsArchive, MessageIsFaverite, PostNewComment, ProviderPrivateNote,
   ProviderCalendarEvents, ProviderComment,
  ProviderCommentList, ProviderConnections, ProviderConnectionsSearch, 
  ProviderDocuments, ProviderIncommingDocuments, ProviderInvite, 
  ProviderNote, ProviderOutgoingDocuments,  VideoChat,
  ProviderRXInfo, UploadDocument, UploadDocumentRX, ViewDocumentRx, 
  ViewProviderReferrals  } from './Entities/ProviderEntities';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Account/login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [AttachedFile, BusinessLogo, BusinessUserProfile, ConsentProviderName, 
    CreateNewEvent, DashboardAppStartup, DashboardBusinessStorage, DashboardCalendarEvents, 
    DashboardNetSpeed, DashboardSearchPerUser, DashboardUpcommingEventLinks, 
    DashboardUpcommingEventList, DashboradConfirmedApptment, DocumentIsArchive, DcoumentIsFaverite, 
    Message, MessageIsArchive, MessageIsFaverite, PostNewComment, ProviderPrivateNote,
     ProviderCalendarEvents, ProviderComment,
    ProviderCommentList, ProviderConnections, ProviderConnectionsSearch, 
    ProviderDocuments, ProviderIncommingDocuments, ProviderInvite, 
    ProviderNote, ProviderOutgoingDocuments,  VideoChat,
    ProviderRXInfo, UploadDocument, UploadDocumentRX, ViewDocumentRx, 
    ViewProviderReferrals 
  
  
  ],  //imported classes
  bootstrap: [AppComponent]
})


export class AppModule { }
