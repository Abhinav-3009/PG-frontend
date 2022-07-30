import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-institute-registration',
  templateUrl: './institute-registration.component.html',
  styleUrls: ['./institute-registration.component.css']
})
export class InstituteRegistrationComponent implements OnInit {
  instituteRegisterForm: FormGroup = new FormGroup({});
  submitted = false;
  isValidForm = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.instituteRegisterForm = this.formBuilder.group(
      {

        InstituteCatagory: ['', Validators.required],
        Name: ['', [Validators.required]],
        Institutecode: ['', Validators.required],
        Disecode: ['', Validators.required],
        Location: ['', Validators.required],
        InstituteType: ['', Validators.required],
        AffilatedState: ['', Validators.required],
        AffilatedName: ['', Validators.required],
        AdmissionStartYear: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.maxLength(10),
          ],
        ],
        Address: ['', Validators.required],
        City: ['', Validators.required],
        State: ['', Validators.required],
        District: ['', Validators.required],
        Pincode: ['', Validators.required],
        PrincipalName: ['', Validators.required],
        PrincipalNumber: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      //{
      //  validators: [Validation.match('password', 'confirmPassword')],
      //  }
    );
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
}
