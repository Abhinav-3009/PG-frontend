import { Component, OnInit } from '@angular/core';
import { IInstituteLogin } from '../iinstitute-login';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-login',
  templateUrl: './institute-login.component.html',
  styleUrls: ['./institute-login.component.css']
})


///<summary>
//This component is for institute login page .Institute can provide login details in the form provided .
//and after check the details from backend we alert the user that login is successful.

export class InstituteLoginComponent implements OnInit {

  loginid:number=0

  logindata:IInstituteLogin={
    Institutecode:0,
    Password:''
  }
  constructor(private instituteservice:InstituteService, private router:Router) { }

  saveLogin(login:IInstituteLogin){
    this.logindata=login
    this.instituteservice.checkInstitute(this.logindata).subscribe((d)=>
    {
      this.loginid=d
      alert("Login Successful! Your ID is " + this.loginid)
      this.router.navigate(['/InstituteHome/',this.loginid])
    })
  }

  ngOnInit(): void {
  }

}
