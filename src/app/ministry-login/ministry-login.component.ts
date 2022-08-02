import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-ministry-login',
  templateUrl: './ministry-login.component.html',
  styleUrls: ['./ministry-login.component.css']
})

///<summary>
//This component is for ministry login . Only if the ministry enters the correct details (id:ministry , password:ministry)
// , the login will work.

export class MinistryLoginComponent implements OnInit {

  nodalloginForm={} as FormGroup
  formSubmitted=false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createloginForm();
  }

  createloginForm(){
    this.nodalloginForm=this.formBuilder.group({
      ID:['',Validators.required],
      Password:['',Validators.required]
    })
  }

  onFormSubmit(){

    let id:string=this.nodalloginForm.value.ID
    let pw:string=this.nodalloginForm.value.Password
    if(id=="ministry" && pw=="ministry"){this.formSubmitted=true;}
    else{
      alert("Id or Password is incorrect!")
    }
  }

}
