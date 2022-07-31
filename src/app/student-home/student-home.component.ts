import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IStudent } from '../istudent';
import { StudentService } from '../Services/student.service';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  studentdata:IStudent={name:'',dob:new Date(),gender:'',mobileNumber:'',email:'',instituteCode:0,aadhaar:'',accountNo:'',bankIFSC:'',bankName:'',password:''}
  studentid:number=0
  constructor(private studentservice:StudentService,private activatedroute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    this.studentid=Number(tid);
    this.studentservice.getStudent(this.studentid).subscribe((data:IStudent)=>{this.studentdata=data} )
  }
 
}
