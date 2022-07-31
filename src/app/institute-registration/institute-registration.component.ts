import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IInstitute } from '../iinstitute';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {
  //@ts-ignore
  institutedata:IInstitute

  constructor(private instituteservice:InstituteService,private router:Router) { }

  saveInstitute(institute:IInstitute)
  {
    this.institutedata=institute;
    this.instituteservice.addInstitute(this.institutedata).subscribe(()=>
    {
      console.log(this.institutedata)
      alert("Institute Registration Successfull")
      this.router.navigate(['/Home'])
    })
  }

  ngOnInit(): void {
    
  }

        
  }






  // get f(): { [key: string]: AbstractControl } {
  //   return this.instituteRegisterForm.controls;
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.isValidForm = true;
  //   if (this.instituteRegisterForm.invalid) {
  //     this.isValidForm = true;
  //     return;
  //   }
  //   console.log(this.instituteRegisterForm.value);
  //   this.reset();
  // }
  // reset() {
  //   this.submitted = false;
  //   this.isValidForm = false;
  //   this.instituteRegisterForm.reset();
  // }

