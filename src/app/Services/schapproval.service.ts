import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class SchapprovalService {
  url='http://localhost:21856/api/ScholarshipApproval/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};
  constructor() { }
}
