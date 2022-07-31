import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapplicatioforinstitute } from '../iapplicatioforinstitute';
@Injectable({
  providedIn: 'root'
})
export class ScholarshipapplicationService {
  url='http://localhost:21856/api/ScholarshipApproval/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { 
  }
  getapplicationforinstitute(id:number):Observable<any>{
    console.log("inside service"+id)
    return this.httpclient.get<Iapplicatioforinstitute>(this.url+'ScholarshipForInstitute/'+id)
  }
}
