import { Component, OnInit } from '@angular/core';
import { ProviderApiService }from './Api.Services/provider-api.service';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
   businessUserBusinessProfile : Array<BusinessUserProfile>;

  constructor(private apiService : ProviderApiService){

  }

  ngOnInit(){
    this.apiService.getBusinessUserProfile().subscribe(data => {
      this.businessUserBusinessProfile = data;
    })
  }

}
