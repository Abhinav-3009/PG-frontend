import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IInstitute } from '../iinstitute';
import { IInstituteregister } from '../iinstituteregister';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {
  instituteregistrationform = {} as FormGroup
  
  // institutedata:IInstituteregister={

  //   instituteCategory:"",
  //   name:"",
  //   institutecode:0,
  //   disecode:0,
  //   location:"",
  //   instituteType:"",
  //   affiliatedState:"",
  //   affiliatedName:"",
  //   admissionStartYear:"",
  //   password:"",
  //   address:"",
  //   city:"",
  //   state:"",
  //   district:"",
  //   pincode:0,
  //   principalName:"",
  //   principalNumber:""
  // }

  constructor(private formBuilder: FormBuilder, private instituteservice: InstituteService, private router: Router) { }

  // saveInstitute(institute:IInstituteregister)
  // {
  //   this.institutedata=institute;
  //   this.instituteservice.addInstitute(this.institutedata).subscribe((data)=>
  //   {
  //     console.log(data)
  //     console.log(this.institutedata)
  //     alert("Institute Registration Successfull")
  //     this.router.navigate(['/Home'])
  //   })
  // }

  saveInstitute(){
    
    console.log(this.instituteregistrationform.value)
    this.instituteservice.addInstitute(this.instituteregistrationform.value).subscribe((d)=>{
      alert("Registration Successfull")
      console.log("service working")
      console.log(d)
    })
  }

  ngOnInit(): void {
    this.createform()
  }
  createform() {
    this.instituteregistrationform = this.formBuilder.group({
      instituteCategory: ['',Validators.required],
      name: ['',Validators.required],
      institutecode: [0,Validators.required],
      disecode: [0,Validators.required],
      location: ['',Validators.required],
      instituteType: ['',Validators.required],
      affiliatedState: ['',Validators.required],
      affiliatedName: ['',Validators.required],
      admissionStartYear: ['',Validators.required],
      password: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      district: ['',Validators.required],
      pincode: [0,Validators.required],
      principalName: ['',Validators.required],
      principalNumber: ['',Validators.required]
    })
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

