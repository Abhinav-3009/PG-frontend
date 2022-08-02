import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstitute } from '../iinstitute';
import { IInstituteregister } from '../iinstituteregister';
import { IInstituteLogin } from '../iinstitute-login';
import { catchError,throwError } from 'rxjs';




// This service is used to provide services related to InstituteService
// it calls methods of institut controller in backend
@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  url='http://localhost:21856/api/Institute/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }

  addInstitute(institute:any):Observable<any>{
    return this.httpclient.post<any>(this.url + 'AddInstitute' ,institute , this.httpOptions)
  }

  checkInstitute(login:IInstituteLogin):Observable<any>{
    return this.httpclient.post<IInstituteLogin>(this.url + 'InstituteLogin' ,login ,this.httpOptions)
  }

  getInstitute(id:number):Observable<any>{
    console.log("inside service"+id)
    return this.httpclient.get<IInstitute>(this.url+'InstituteDetails/'+id).pipe(catchError(this.handleError))
  }

  handleError(err:HttpErrorResponse){
    return throwError(err.error)
  }

  
  }

