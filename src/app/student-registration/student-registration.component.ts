import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IStudent } from '../istudent';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  studentdata:IStudent={name:'',dob:new Date(),gender:'',mobileNumber:'',email:'',instituteCode:0,aadhaar:'',accountNo:'',bankIFSC:'',bankName:'',password:''}
  constructor(private studentservice:StudentService, private router:Router){}

  saveStudent(student:IStudent)
  {

    this.studentdata=student;
    this.studentservice.addStudent(this.studentdata).subscribe(()=>
    {
      
      alert("Student Registration successfull")
      this.router.navigate(['/Home'])
    })

  }

  ngOnInit(): void {
    
  }
}
