import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IStudentLogin } from '../istudent-login';
import { StudentService } from '../Services/student.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  loginid:number=0

  logindata:IStudentLogin={
    Aadhaar:'',
    Password:''
  }
  constructor(private studentservice:StudentService, private router:Router) { }

  saveLogin(login:IStudentLogin){
    this.logindata=login
    this.studentservice.checkStudent(this.logindata).subscribe((d)=>
    {
      this.loginid=d.studentId
      alert("Login Successfull. Your Id is " + this.loginid)
      this.router.navigate(['/StudentHome'])
    })
  }

  ngOnInit(): void {
  }

}
