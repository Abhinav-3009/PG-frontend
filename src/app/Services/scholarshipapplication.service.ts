import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapplicatioforinstitute } from '../iapplicatioforinstitute';


//Service to verify or ject schollarship by institute 


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
  verifyapplication(id:number):Observable<any>{
    console.log("inside service"+id)
    const body = {appid:id}
    return this.httpclient.put<any>(this.url+'ApproveByInstitute/'+id,body)
  }

  declineapplication(id:number):Observable<any>{
    console.log("inside service"+id)
    const body = {appid:id}
    return this.httpclient.put<any>(this.url+'RejectByInstitute/'+id,body)
  }
}
