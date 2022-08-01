import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NodalService } from '../Services/nodal.service';
import { IInstitute } from '../iinstitute';




@Component({
  selector: 'app-nodal-ins-details',
  templateUrl: './nodal-ins-details.component.html',
  styleUrls: ['./nodal-ins-details.component.css']
})
export class NodalInsDetailsComponent implements OnInit {
  application: IInstitute={
    instituteId:0,
    instituteCategory:'',
    name:'',
    institutecode:0,
    disecode:0,
    location:'',
    instituteType:'',
    affiliatedState:'',
    affiliatedName:'',
    admissionStartYear:'',
    password:'',
    address:'',
    city:'',
    state:'',
    district:'',
    pincode:0,
    principalName:'',
    principalNumber:'',
  }
  applicationId:number=0
  constructor(private nodalservice:NodalService,private ActivatedRoute: ActivatedRoute) { }

  approveapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.verifyInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  rejectapplication(id:number):void{
    console.log("message"+id)
    this.nodalservice.declineInsapplication(id).subscribe((data:any)=>{
      console.log(data)
    })
  }

  ngOnInit(): void {
    const tid = this.ActivatedRoute.snapshot.paramMap.get('id')
    this.applicationId = Number(tid);
    this.nodalservice.getInstitute(this.applicationId).subscribe((data: any) => {
      this.application = data
      console.log(this.application)
    })
  }

}
