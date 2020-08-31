
//Create a sub folder under App folder /Api.Entities  (aapp\Entities)
//Create a ProviderEntities.Ts file in the Entities Folder.
//Each entity should be created as an indivisual class. see below, copy paste the entire content below into the ProviderEntities.ts file
//This  needs to be imported into Api.Services folder files for each service call.

//https://www.youtube.com/watch?v=5VTpIrSG8cE&feature=youtu.be
//https://developer.okta.com/blog/2018/07/27/build-crud-app-in-aspnet-framework-webapi-and-angular
//https://www.youtube.com/watch?v=bV8emCBmFHk

//#region Slide 1

export class BusinessLogo {
  BusinessLogo?: HTMLImageElement;
}

export class DashboardSearchPerUser {
  SearchReturn?: string;
  SearchID: number;
}

export class DashboardNetSpeed {
  NetSpeed?: number;
}
// return StorageUsage.toFixed(2)
export class DashboardBusinessStorage {
  StorageUsage?: number;
}

export class BusinessUserProfile {
  BusinessName: string;
  BusinessID: number;
  BusinessKey: string;
  ProviderName: string;
  BusinessLogo: HTMLImageElement;  //byte
  UserImage: HTMLImageElement;   //byte
  BusinessLic: string;
}
//Date and time should be formated correctly
export class DashboradConfirmedApptment {
  apptID: number;
  apptProviderID: number;
  apptDate?: number;
  apptTime?: number;
  apptPatientName?: string;
  apptReason?: string;
}

export class DashboardCalendarEvents {
  calID: number;
  calProviderID: number;
  calDate?: number;
  calTime?: number;
  calDescription?: string;
  calTitle?: String;
}

export class DashboardUpcommingEventList {
  eventProviderID: number;
  eventDate?: number;
  eventTime?: number;
  eventTitle?: string;
  eventDescription?: string;
}

export class DashboardUpcommingEventLinks {
  linkProviderID: number;
  linkDate: number;
  linkMessage: string;
}

export class DashboardAppStartup {
  eventProviderID: number;
  eventTime: number;
  eventType: string;
  eventSubject: string;
  eventNote: string;

}

export class CreateNewEvent {
  ID: number;
  eventProviderID: number;
  eventDate: number;
  eventTime: number;
  eventDescription: string;
  eventTitle: string;
}
//#endregion

//#region Slide 2

export class Message {
  msgID: number;
  msgRecipientID: number;
  msgSenderID: number;
  msgToProviderName?: string;
  msgDate: number;
  msgFromName?: string;
  msgSubject: string;
  patientName: string;
  action: string;
}

export class ProviderCalendarEvents {
  calProviderID: number;
  calDate?: number;
  calTime?: number;
  calDescription?: string;
  calTitle?: String;
}

export class ProviderDocuments {
  docDate: number;
  docFrom: string;
  docSubject: string;
  docAction: string;
}
//#endregion

//#region Slide 3

export class ProviderInvite {
  inviteeEmail: string;
  invteeName: string;
}

export class ProviderConnectionsSearch {
  searchField: string;
}

export class ProviderConnections {
  providerID: number;
  providerImage: HTMLImageElement;
  providerName: string;
  providerBusinessName: string;
}

export class UploadDocument {
  docSenderID: number;
  docRecipient: number;
  docSubject: string;
  docPatientName: string;
  docNote: string;
  attachedDoc: File;
}

export class UploadDocumentRX {
  rxSenderID: number;
  rxRecpientID: number;
  rxTooth: number;
  rxArea: string;
  rxNote: string;
  selectedReferral: string;
  attachRX: File;
}
//#endregion

//#region slide 4
// nothing here
//#endregion

//#region slide 5

export class ConsentProviderName {
  providerName: string;
}
//#endregion

//#region slide 6

export class ProviderIncommingDocuments {
  docID: number;
  docProviderID: number;
  docDate: number;
  docFrom: string;
  docSubject: string;
  isRxIncluded: boolean;
  docAction: string;
}

export class ProviderOutgoingDocuments {
  docDate: number;
  docProviderID: number;
  docTo: string;
  docSubject: string;
  docAction: string;
}
//}
export class DocumentIsArchive {
  docID: number;
  IsArchive: true;
}

//}
export class DcoumentIsFaverite {
  docID: number;
  IsFaverite: true;
}
//#endregion

//#region Slide 7
//ProviderRxInfo-1
export class ProviderRXInfo {
  RxID: number;
  providerID: number;
  fromName: string;
  fromGroupMember: string;
  patientName: string;
  subject: string;
}
//RpviderRxButton -6  add additon files
export class AttachedFile {
  fileName: string;
  fileSize: number;
  fileFrom: string;
  uploadFileDate: number;
}
export class Document {
  docID: number;
  documentFile: File;
}
//ProviderRxInfo-2
export class ViewDocumentRx {
  rxID: number;
  rxImage: HTMLImageElement;
  toothNumber: number;
  area: string;
  rxNotes: string;
}
//ProviderRxInfo -4
export class ViewProviderReferrals {
  slectedReferrals: string;
}

//somthing for live chat
export class ProviderComment {
  commentID: number;
  commentSenderID: number;
  commentRecipientID: number;
  comentFrom: string;
  comentDate: number;
  comentTime: number;
  ComentContent: string;
}

export class PostNewComment {
  commentSenderID: number;
  commentRecipientID: number;
  commentDate: number;
  comentContent: string;
}
//#endregion

//#region slide 8
//reuse
//export class ProviderInvite {
//    inviteeEmail : string;
//    invteeName : string;
//}

//export class ProviderConnectionsSearch {
//     searchField : string;
//}

//export class ProviderConnections {
//    providerImage : HTMLImageElement;
//    providerName: string;
//    providerBusinessName : string ;
//}
export class MessageIsArchive {
  msgID: number;
  IsArchive: true;

}
export class MessageIsFaverite {
  msgID: number;
  IsFaverite: true;
}

export class Messages {
  msgID: number;
  msgRecipientID: number;
  msgSenderID: number;
  msgToProviderName?: string;
  msgDate: number;
  msgFromName?: string;
  msgSubject: string;
  patientName: string;
  action: string;
}

//#endregion

//#region Slide 9
//note to self, not to be shared with anyone, selfID
export class ProviderPrivateNote {
  noteID: number;
  noteProviderID: number;
  noteDate: number;
  noteTime: number;
  noteContent: string;
}

export class ProviderCommentList {
  commID: number;
  commSenderID: number;
  commRecipientID: number;
  commDate: number;
  commTime: number;
  commFrom: string;
  commAction: string;
}

export class ProviderNote {
  noteID: number;
  noteSenderID: number;
  noteRecipientID: number;
  noteDate: number;
  noteTime: number;
  noteFrom: string;
  noteContent: string;
}

export class VideoChat {
  videoChatID: number
  videoChatUserID: number;
  videoDate: number;
  VideoChatContent: string;
}
//#endregion

//#region slide 10



//#endregion
