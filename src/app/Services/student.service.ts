import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStudent } from '../istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='http://localhost:21856/api/Student/';
  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})};


  constructor(private httpclient:HttpClient) { }

  addStudent(student:IStudent):Observable<IStudent> {
    return this.httpclient.post<IStudent>(this.url + 'AddStudent',student, this.httpOptions)
  }
}
