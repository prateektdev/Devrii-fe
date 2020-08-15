import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//Entites Model references
//slide 1
import {
  AttachedFile, BusinessLogo, BusinessUserProfile, ConsentProviderName,
  CreateNewEvent, DashboardAppStartup, DashboardBusinessStorage, DashboardCalendarEvents,
  DashboardNetSpeed, DashboardSearchPerUser, DashboardUpcommingEventLinks,
  DashboardUpcommingEventList, DashboradConfirmedApptment, DocumentIsArchive, DcoumentIsFaverite,
  Message, MessageIsArchive, MessageIsFaverite, PostNewComment, ProviderPrivateNote,
  ProviderCalendarEvents, ProviderComment,
  ProviderCommentList, ProviderConnections, ProviderConnectionsSearch,
  ProviderDocuments, ProviderIncommingDocuments, ProviderInvite,
  ProviderNote, ProviderOutgoingDocuments, VideoChat,
  ProviderRXInfo, UploadDocument, UploadDocumentRX, ViewDocumentRx,
  ViewProviderReferrals
} from '../../Entities/ProviderEntities';




//*************************************** */

@Injectable({
  providedIn: 'root'
})

export class ProviderApiService {

  // api string
  private _url: string = "https://devrii.azurewebsites.net/api";
  public token = localStorage.getItem('token');

  constructor(private http: HttpClient) { }

  //#region slide 1
  //return {BusinessLogo}
  getDhashboardBusinessLogo(): Observable<BusinessLogo[]> {
    const opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.get<BusinessLogo[]>(this._url + '/Manage/GetBusinessLogo')
  }

  //returns {SearchReturn}
  getDashbordSearchResult(): Observable<DashboardSearchPerUser[]> {
    return this.http.get<DashboardSearchPerUser[]>(this._url + '/Manage/GetDashboardSearchPerUser')
  }

  //returns {NetSpeed}
  getDashboardBusinessNetSpeed(): Observable<DashboardNetSpeed[]> {
    return this.http.get<DashboardNetSpeed[]>(this._url + '/Manage/GetDashboardNetSpeed')
  }

  //returns {StorageUsage}
  getDashboardBusinessStorage(): Observable<DashboardBusinessStorage[]> {
    return this.http.get<DashboardBusinessStorage[]>(this._url + '/Manage/GetDashboardBusinessStorage')
  }

  //returns {BusinessName} {BusinessID} {BusinessKey} {ProviderName} {BusinessLogo} {UserImage} {BusinessLic}
  getBusinessUserProfile(): Observable<BusinessUserProfile[]> {
    return this.http.get<BusinessUserProfile[]>(this._url + '/Manage/GetBusinessUserProfile')
  }

  //returns {apptDate} {apptTime} {apptPatientName} {apptReason}
  getDashoardBusinessConfirmedAppointment(): Observable<DashboradConfirmedApptment[]> {
    return this.http.get<DashboradConfirmedApptment[]>(this._url + '/Manage/GetDashboardConfirmedAppointmentsForBusiness')
  }

  //returns {apptDate} {apptTime} {apptPatientName} {apptReason}
  getDhasboardUserConfirmedAppointment(): Observable<DashboradConfirmedApptment[]> {
    return this.http.get<DashboradConfirmedApptment[]>(this._url + '/Manage/GetDashboardConfirmedAppointmentsForUser')
  }

  //returns {calDate} {calTime} {calDescription} {calTitle}
  getDaashboardCallendarEventsBusiness(): Observable<DashboardCalendarEvents[]> {
    return this.http.get<DashboardCalendarEvents[]>(this._url + '/Manage/GetDashboardCalendarEventsForBusiness')
  }

  //returns {calDate} {calTime} {calDescription} {calTitle}
  getDashboardCallendarEventsUser(): Observable<DashboardCalendarEvents[]> {
    return this.http.get<DashboardCalendarEvents[]>(this._url + '/Manage/GetDashboardCalendarEventsForUser')
  }

  //returns {eventDate} {eventTime} {eventTitle} {eventDescription}
  getDhasboard5UpcommengEventsListBusiness(): Observable<DashboardUpcommingEventList[]> {
    return this.http.get<DashboardUpcommingEventList[]>(this._url + '/Manage/GetDashboard5UpcommingEventsListForBusiness')
  }

  //returns {eventDate} {eventTime} {eventTitle} {eventDescription}
  getDashboard5UpcommengEventsListUser(): Observable<DashboardUpcommingEventList[]> {
    return this.http.get<DashboardUpcommingEventList[]>(this._url + '/Manage/GetDashboard5UpcommingEventsListForUser')
  }

  //returns {linkDate} {linkMessage}
  getDashboardEventsLinks(): Observable<DashboardUpcommingEventLinks[]> {
    return this.http.get<DashboardUpcommingEventLinks[]>(this._url + '/Manage/GetDashboardEventsLinks')
  }

  //returns {eventTime} {eventType} {eventSubject} {eventNote}
  getDashboardStartupBusiness(): Observable<DashboardAppStartup[]> {
    return this.http.get<DashboardAppStartup[]>(this._url + '/Manage/GetDashboardStartup')
  }

  //post {ID} {eventDate} {eventTime} {eventDescription} {eventTitle}
  postNewEvent(newEvent: CreateNewEvent): Observable<CreateNewEvent> {
    let result: Observable<CreateNewEvent>;
    if (newEvent.ID) {
      result = this.http.put<CreateNewEvent>(
        `${this._url + '/Manage/PostCreateNewEvent'}/${newEvent.ID}`,
        newEvent
      );
    } else {
      result = this.http.post<CreateNewEvent>(this._url + '/Manage/PostCreateNewEvent', newEvent);
    }
    return result;
  }

  //post
  postBusinessLogo(fileToUpload: File) {
    //pass userID from here or retived in the method from the context.
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload)
    return this.http.post(this._url + '/Manage/PostBusinessLogo', formData);
  }
  //#endregion

  //#region slide 2
  //returns {msgID} {msgDate} {msgRecipientID} {msgSenderID} {megToProviderName} {msgFromName} {megToProviderID} {msgSubject} {patientName}
  getProviderMessage(): Observable<Message[]> {
    return this.http.get<Message[]>(this._url + '/Manage/GetProviderTop10IncommingMessagess')
  };

  //return {calDate} {calTime} {calDescription} {calTitle}
  getProviderCalendarEvents(): Observable<ProviderCalendarEvents[]> {
    return this.http.get<ProviderCalendarEvents[]>(this._url + 'Manage/GetProviderMonthlyEvents')
  }

  //return {docDate} {docFrom} {docSubject} {docAction}
  getProviderDocuments(): Observable<ProviderDocuments[]> {
    return this.http.get<ProviderDocuments[]>(this._url + '/Manage/GetProviderTop10IncommingDocuments')
  }

  //#endregion

  //#region slide 3

  //post: {inviteeEmail} {invteeName}
  postProviderInvite(invite: ProviderInvite): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(invite);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderInvite', body, { 'headers': headers })
  }

  //returns {searchField}
  getProviderConnectionsSearch(): Observable<ProviderConnectionsSearch[]> {
    return this.http.get<ProviderConnectionsSearch[]>(this._url + '/Manage/PostSearchProviderConnections')
  }

  //returns {providerID} {providerImage} {providerName} {providerBusinessName}
  getProviderConnections(): Observable<ProviderConnections[]> {
    return this.http.get<ProviderConnections[]>(this._url + '/Manage/GetProviderConnections')
  }

  //post {docSenderID} {docRecipient} {docSubject} {docPatientName} {docNote} {attachedDoc}
  postUploadDocument(docUpload: UploadDocument): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(docUpload);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostUploadDocument', body, { 'headers': headers })
  }

  //post {rxSenderID} {rxRecpientID} {rxTooth} {rxArea} {rxNote} {selectedReferral} {attachRX}
  postUploadRx(rxUpload: UploadDocumentRX): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(rxUpload);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostAttachRX', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 4
  //    duplicate from 3 postUploadRx()
  //#endregion

  //#region slide 5
  //post: {providerName}
  postProviderConsent(consent: ConsentProviderName): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(consent);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderRXConsent', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 6
  //returns {docID} {docDate} {docFrom} {docSubject} {isRxIncluded} {docAction}
  getProviderIncommingDocumentsList(): Observable<ProviderIncommingDocuments[]> {
    return this.http.get<ProviderIncommingDocuments[]>(this._url + '/Manage/GetProviderOutgoinDocList')
  }
  //post {docDate} {docTo} {docSubject} {docAction}
  getProviderOutgoingDocumentsList(): Observable<ProviderOutgoingDocuments[]> {
    return this.http.get<ProviderOutgoingDocuments[]>(this._url + '/Manage/GetProviderIncommingDocList')
  }

  //post {msgID} {status: IsFaverite = True}
  postSetDocumentArchive(isAchrive: DocumentIsArchive): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(isAchrive);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostArchiveDocument', body, { 'headers': headers })
  }

  //post {msgID} {status: IsFaverite = True}
  postSetDocumentFavorte(isFaverite: DcoumentIsFaverite): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(isFaverite);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostFavriteDocument', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 7
  //returns {RxID} {fromName} {fromGroupMember} {patientName} {subject}
  getProviderRxInfo(): Observable<ProviderRXInfo[]> {
    return this.http.get<ProviderRXInfo[]>(this._url + '/Manage/GetProviderRXInfo')
  }

  //returns {docID} {documentFile}
  getDownloadDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(this._url + '/Manage/GetDocumentDownload')
  }

  //returns {docID} {documentFile}
  getViewDocument(): Observable<Document[]> {
    return this.http.get<Document[]>(this._url + '/Manage/GetDocumentView')
  }

  //returns {rxID} {rxImage} {toothNumber} {area} {rxNotes}
  getViewDocumentRxDetail(): Observable<ViewDocumentRx[]> {
    return this.http.get<ViewDocumentRx[]>(this._url + '/Manage/GetProviderRXDetailInfo')
  }

  //post {fileName} {fileSize} {fileFrom} {uploadFileDate}
  postAttachFile(attachFile: AttachedFile): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(attachFile);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderFile', body, { 'headers': headers })
  }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postAddProviderNote(prividerNote: ProviderNote): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prividerNote);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderNotes', body, { 'headers': headers })
  }

  //returns {slectedReferrals}
  getViewProviderReferrals(): Observable<ViewProviderReferrals[]> {
    return this.http.get<ViewProviderReferrals[]>(this._url + '/Manage/GetProviderReferralReasons')
  }
  //returns {commentID} {comentFrom} {comentDate} {comentTime} {ComentContent}
  getProviderComments(): Observable<ProviderComment[]> {
    return this.http.get<ProviderComment[]>(this._url + '/Manage/GetProviderComments')
  }

  //post {commentSenderID} {commentRecipientID} {commentDate} {comentContent}
  postNewComment(prividerNote: PostNewComment): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prividerNote);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderComment', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 8?\
  //returns {msgID} {msgDate} {msgRecipientID} {msgSenderID} {megToProviderName} {msgFromName} {megToProviderID} {msgSubject} {patientName}
  getProviderMessagesList(): Observable<Message[]> {
    return this.http.get<Message[]>(this._url + '/Manage/GetProviderMessagesList')
  }

  //returns {msgID} {msgDate} {msgRecipientID} {msgSenderID} {megToProviderName} {msgFromName} {megToProviderID} {msgSubject} {patientName}
  getProviderMessagesDetail(): Observable<Message[]> {
    return this.http.get<Message[]>(this._url + '/Manage/GetProviderSelectedMessageDetail')
  }

  //post {msgID} {status: IsFaverite = True}
  postSetMessageFavorite(isFaverite: MessageIsFaverite): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(isFaverite);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostFaveriteMessage', body, { 'headers': headers })
  }

  //post {msgID} {status: IsArchive = True}
  postSetMessageArchive(isArchive: MessageIsArchive): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(isArchive);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostArchiveMessage', body, { 'headers': headers })
  }

  //post {msgDate} {msgRecipientID} {msgSenderID} {megToProviderName} {msgFromName} {megToProviderID} {msgSubject} {patientName}
  postProviderMessage(providerMessage: Message): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(providerMessage);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderMessage', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 9
  //returns {noteDate} {noteTime} {noteContent}
  getProviderPrivateNote(): Observable<ProviderPrivateNote[]> {
    return this.http.get<ProviderPrivateNote[]>(this._url + '/Manage/GetProviderPrivateNote')
  }

  //returns {videoChatID} {videoChatUserID} {videoDate} {VideoChatContent}
  getProviderVideoChat(): Observable<VideoChat[]> {
    return this.http.get<VideoChat[]>(this._url + '/Manage/GetProviderVideoChat')
  }
  //returns {commID} {commDate} {commTime} {commFrom} {commAction}
  getProviderCommentList(): Observable<ProviderCommentList[]> {
    return this.http.get<ProviderCommentList[]>(this._url + '/Manage/PostProviderPrivateNote')
  }

  ///post {noteProviderID} {noteDate} {noteTime} {noteContent}
  postProviderPrivateNote(prividerNote: ProviderNote): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prividerNote);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }

  //post {videoChatUserID} {videoDate} {VideoChatContent}
  postProviderVideoChat(videChate: VideoChat): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(videChate);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostProviderVideoChat', body, { 'headers': headers })
  }
  //#endregion

  //#region slide 10
  //returns {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  getProviderNoteList(): Observable<ProviderNote[]> {
    return this.http.get<ProviderNote[]>(this._url + '/Manage/GetProviderNoteList')
  }

  //returns {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  getProviderNoteDetail(): Observable<ProviderNote[]> {
    return this.http.get<ProviderNote[]>(this._url + '/Manage/GetProviderNoteDetail')
  }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postEditProviderNote(prividerNote: ProviderNote): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(prividerNote);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }
  //#endregion



}  // end of file




// remove(id: number) {
//     return this.http.delete(`${this.}/${id.toString()}`);
// }
