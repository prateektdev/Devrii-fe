import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BusinessRegister, ClientRegister, DealarRegister } from '../../Entities/AccountEntities';

@Injectable({
  providedIn: 'root'
})
export class AccountApiService {

  // api string
  private _url: string = "https://devrii.azurewebsites.net/api/";

  constructor(private http: HttpClient) { }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postRegister(providerRegister: BusinessRegister): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(providerRegister);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postBusinessRegister(businessRegister: BusinessRegister): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(businessRegister);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postClientRegister(clientRegister: ClientRegister): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(clientRegister);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }

  //post {noteID} {noteDate} {noteTime} {noteFrom} {noteContent}
  postDealerRegister(dealerRegister: DealarRegister): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(dealerRegister);
    console.log(body)
    return this.http.post(this._url + 'Manage/PostPrividerNote', body, { 'headers': headers })
  }

}  //end class
