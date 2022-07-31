import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchApplication } from '../sch-application';
import { SchAppService } from '../Services/sch-app.service';

@Component({
  selector: 'app-institute-student-applications',
  templateUrl: './institute-student-applications.component.html',
  styleUrls: ['./institute-student-applications.component.css']
})
export class InstituteStudentApplicationsComponent implements OnInit {
  //@ts-ignore
  application:SchApplication[]=[]
  applicationId:number=0
  constructor(private schAppService:SchAppService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const tid=this.ActivatedRoute.snapshot.paramMap.get('id')
    this.applicationId=Number(tid);
    this.schAppService.getSchApplication(this.applicationId).subscribe((data:any)=>{this.application=data} )

  }

}
