import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SchApplication } from '../sch-application';
import { IApplication } from '../iapplication';

@Injectable({
  providedIn: 'root'
})
export class SchAppService {
url='http://localhost:21856/api/ScholarshipApplication/';
httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }

  addSchApplication(SchApplication:SchApplication):Observable<SchApplication>{
    return this.httpclient.post<SchApplication>(this.url + 'AddScholarshipApplication' ,SchApplication , this.httpOptions)
  }

  getSchApplication(id:number):Observable<any>{
    return this.httpclient.get<IApplication>(this.url + 'FindScholarshipApplication/'+id)
  }
}
