import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchApplication } from '../sch-application';
import { SchAppService } from '../Services/sch-app.service';
import { IApplication } from '../iapplication';
import { ScholarshipapplicationService } from '../Services/scholarshipapplication.service';

@Component({
  selector: 'app-institute-student-applications',
  templateUrl: './institute-student-applications.component.html',
  styleUrls: ['./institute-student-applications.component.css']
})
export class InstituteStudentApplicationsComponent implements OnInit {
  //@ts-ignore
  application: IApplication
  applicationId: number = 0
  constructor(private schAppService: SchAppService, private ActivatedRoute: ActivatedRoute,
    private applicationservice:ScholarshipapplicationService
    ) {
    // let btn = document.getElementById("approve");
    // btn.addEventListener("click", (e:Event) => this.approveapplication(this.applicationId));
   }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.applicationservice.verifyapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.applicationservice.declineapplication(id).subscribe((data:any)=>{
      console.log(data)
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


