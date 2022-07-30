import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstitute } from '../iinstitute';

@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  url='http://localhost:21856/api/Institute/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }

  addInstitute(institute:IInstitute):Observable<IInstitute>{
    return this.httpclient.post<IInstitute>(this.url + 'AddInstitute' ,institute , this.httpOptions)
  }
}
