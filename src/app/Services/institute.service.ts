import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstitute } from '../iinstitute';
import { IInstituteLogin } from '../iinstitute-login';
import { catchError,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InstituteService {
  url='http://localhost:21856/api/Institute/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor(private httpclient:HttpClient) { }

  addInstitute(institute:IInstitute):Observable<any>{
    return this.httpclient.post<IInstitute>(this.url + 'AddInstitute' ,institute , this.httpOptions)
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

