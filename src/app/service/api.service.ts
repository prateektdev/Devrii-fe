import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public apiUrl = environment.apiUrl;
  public token = localStorage.getItem('token');
  public simpleHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };

  login(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.http.post(`${this.apiUrl}oauth/token`, data, httpOptions);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Account/PostRegister`, data, this.simpleHeader);
  }

  getbussinessLogo(): Observable<any> {
    const opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.get(`${this.apiUrl}api/Manage/GetBusinessLogo`, opt);
  }

  getDashboardSearchPerUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardSearchPerUser`, this.simpleHeader);
  }

  getDashboardNetSpeed(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardNetSpeed`, this.simpleHeader);
  }

  getDashboardBusinessStorage(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardBusinessStorage`, this.simpleHeader);
  }

  getUserProfileOptions(): Observable<any> {
    const opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    return this.http.get(`${this.apiUrl}api/Manage/GetUserProfileOptions`, opt);
  }

  getDashboardConfirmedAppointmentsForBusiness(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardConfirmedAppointmentsForBusiness`, this.simpleHeader);
  }

  getDashboardConfirmedAppointmentsForUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardConfirmedAppointmentsForUser`, this.simpleHeader);
  }

  getDashboardCalendarEventsForBusiness(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardCalendarEventsForBusiness`, this.simpleHeader);
  }

  getDashboardCalendarEventsForUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardCalendarEventsForUser`, this.simpleHeader);
  }

  getDashboard5UpcommingEventsListForBusiness(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboard5UpcommingEventsListForBusiness`, this.simpleHeader);
  }

  getDashboard5UpcommingEventsListForUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboard5UpcommingEventsListForUser`, this.simpleHeader);
  }

  getDashboardEventsLinks(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardEventsLinks`, this.simpleHeader);
  }

  getDashboardStartup(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDashboardStartup`, this.simpleHeader);
  }

  postCreateNewEvent(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostCreateNewEvent`, data, this.simpleHeader);
  }

  postProviderSearch(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderSearch`, data, this.simpleHeader);
  }

  getProviderTop10IncommingMessagess(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderTop10IncommingMessagess`, this.simpleHeader);
  }

  getProviderMonthlyEvents(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderMonthlyEvents`, this.simpleHeader);
  }

  getProviderTop10IncommingDocuments(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderTop10IncommingDocuments`, this.simpleHeader);
  }

  postProviderInvite(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderInvite`, data, this.simpleHeader);
  }

  postSearchProviderConnections(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostSearchProviderConnections`, data, this.simpleHeader);
  }

  getProviderConnections(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderConnections`, this.simpleHeader);
  }

  postUploadDocumentRx(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostUploadDocumentRx`, data, this.simpleHeader);
  }

  postAttachRX(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostAttachRX`, data, this.simpleHeader);
  }

  postProviderRXConsent(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderRXConsent`, data, this.simpleHeader);
  }

  postProviderDocSearch(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderDocSearch`, data, this.simpleHeader);
  }

  getProviderOutgoinDoc(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderOutgoinDoc`, this.simpleHeader);
  }

  getProviderIncommingDoc(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderIncommingDoc`, this.simpleHeader);
  }

  postProviderConnections(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderConnections`, data, this.simpleHeader);
  }

  postArchiveDocument(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostArchiveDocument`, data, this.simpleHeader);
  }

  postFavriteDocument(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostFavriteDocument`, data, this.simpleHeader);
  }

  getProviderRXInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderRXInfo`, this.simpleHeader);
  }

  getDocumentDownload(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDocumentDownload`, this.simpleHeader);
  }

  getDocumentView(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetDocumentView`, this.simpleHeader);
  }

  getProviderRXFileInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderRXFileInfo`, this.simpleHeader);
  }

  getProviderRXDetailInfo(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderRXDetailInfo`, this.simpleHeader);
  }

  postProviderNotes(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderNotes`, data, this.simpleHeader);
  }

  getProviderReferralReasons(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderReferralReasons`, this.simpleHeader);
  }

  getProviderComments(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderComments`, this.simpleHeader);
  }

  postProviderComment(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderComment`, data, this.simpleHeader);
  }

  getProviderMessages(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderMessages`, this.simpleHeader);
  }

  postFaveriteMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostFaveriteMessage`, data, this.simpleHeader);
  }

  postArchiveMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostArchiveMessage`, data, this.simpleHeader);
  }

  getProviderSelectedMessage(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderSelectedMessage`, this.simpleHeader);
  }

  postProviderMessage(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderMessage`, data, this.simpleHeader);
  }

  getProviderNoteList(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderNoteList`, this.simpleHeader);
  }

  getproviderCommentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetproviderCommentList`, this.simpleHeader);
  }

  postProviderNote(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderNote`, data, this.simpleHeader);
  }

  getProviderNoteDetail(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderNoteDetail`, this.simpleHeader);
  }

  getProviderPrivateNoteDetail(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/Manage/GetProviderPrivateNoteDetail`, this.simpleHeader);
  }

  postProviderPrivateChatNote(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}api/Manage/PostProviderPrivateChatNote`, data, this.simpleHeader);
  }

}
