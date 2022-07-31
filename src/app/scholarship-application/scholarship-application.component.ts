import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchApplication } from '../sch-application';
import { SchAppService } from '../Services/sch-app.service';

@Component({
  selector: 'app-scholarship-application',
  templateUrl: './scholarship-application.component.html',
  styleUrls: ['./scholarship-application.component.css']
})
export class ScholarshipApplicationComponent implements OnInit {
SchAppdata:SchApplication={
  StudentId:5,
  InstituteId:6,
  Religion:'',
    Community:'',
    Fathername:'',
    Mothername:'',
    AnnualIncome:0,
    InstituteName:'',
    PresentCourse:'',
    PresentCourseYear:'',
    ModeOfStudy:'',
    ClassStartDate:new Date(),
    UniversityBoardName:'',
    PreviousCourse:'',
    PreviousPassingYear:'',
    PreviousCoursePercentage:0,
    RollNumber10th:0,
    BoardName10th:'',
    PassingYear10th:'',
    Percentage10th:0,
    RollNumber12th:0,
    BoardName12th:'',
    PassingYear12th:'',
    Percentage12th:0,
    AdmissionFee:0,
    TuitionFee:0,
    OtherFee:0,
    IsDisabled:'',
    DisabilityType:'',
    DisabilityPercentage:0,
    MaritalStatus:'',
    ParentsProfession:'',
    State:'',
    District:'',
    Address:'',
    Pincode:0,
    ScholarshipId:1
}
  constructor(private schappservice:SchAppService, private router:Router) { }

  saveSchApp(schapplication:SchApplication)
  {
    this.SchAppdata=schapplication;
    this.schappservice.addSchApplication(this.SchAppdata).subscribe(()=>
    {
      alert("Scholarship application Successfull")
      this.router.navigate(['/Home'])
    })
  }

  ngOnInit(): void {
  }

}
