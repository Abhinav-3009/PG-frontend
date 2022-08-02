import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchApplication } from '../sch-application';
import { SchAppService } from '../Services/sch-app.service';
import { IApplication } from '../iapplication';
import { ScholarshipapplicationService } from '../Services/scholarshipapplication.service';

@Component({
  selector: 'app-institute-student-applications',
  templateUrl: './institute-student-applications.component.html',
  styleUrls: ['./institute-student-applications.component.css']
})

///<summary>
//This component is for details for application for an institute . 
//Here we have two main functions to approve and reject an application

export class InstituteStudentApplicationsComponent implements OnInit {
  //@ts-ignore
  application: IApplication={
    applicationId:0,
    studentId:0,
    instituteId:0,
    religion:"",
    community:"",
    fathername:"",
    mothername:"",
    annualIncome:0,
    instituteName:"",
    presentCourse:"",
    presentCourseYear:"",
    modeOfStudy:"",
    classStartDate: new Date(),
    universityBoardName:"",
    previousCourse:"",
    previousPassingYear:"",
    previousCoursePercentage:0,
    rollNumber10th:0,
    boardName10th:"",
    passingYear10th:"",
    percentage10th:0,
    rollNumber12th:0,
    boardName12th:"",
    passingYear12th:"",
    percentage12th:0,
    admissionFee:0,
    tuitionFee:0,
    otherFee:0,
    isDisabled:"",
    disabilityType:"",
    disabilityPercentage:0,
    maritalStatus:"",
    parentsProfession:"",
    state:"",
    district:"",
    address:"",
    pincode:0,
    scholarshipId:0,
  }
  applicationId: number = 0
  constructor(private schAppService: SchAppService, private ActivatedRoute: ActivatedRoute,private router:Router,
    private applicationservice:ScholarshipapplicationService
    ) {
    // let btn = document.getElementById("approve");
    // btn.addEventListener("click", (e:Event) => this.approveapplication(this.applicationId));
   }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.applicationservice.verifyapplication(id).subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['/ApplicationForInstitute/',this.application.instituteId])
    })
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.applicationservice.declineapplication(id).subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['/ApplicationForInstitute/',this.application.instituteId])
    })
  }
  ngOnInit(): void {
    const tid = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.applicationId = Number(tid);
    this.schAppService.getSchApplication(this.applicationId).subscribe((data: any) => {
      this.application = data
      console.log(this.application)
    })
    
    

  }

}


