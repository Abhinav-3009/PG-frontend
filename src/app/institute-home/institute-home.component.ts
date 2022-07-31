import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInstitute } from '../iinstitute';
import { InstituteService } from '../Services/institute.service';

@Component({
  selector: 'app-institute-home',
  templateUrl: './institute-home.component.html',
  styleUrls: ['./institute-home.component.css']
})
export class InstituteHomeComponent implements OnInit {
  institutedata:IInstitute={
    InstituteCategory:'',
    Name:'',
    Institutecode:0,
    Disecode:0,
    Location:'',
    InstituteType:'',
    AffiliatedState:'',
    AffiliatedName:'',
    AdmissionStartYear:'',
    Password:'',
    Address:'',
    City:'',
    State:'',
    District:'',
    Pincode:0,
    PrincipalName:'',
    PrincipalNumber:'',
  }

  instituteid:number=0

  constructor(private instituteservice:InstituteService,private activatedroute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    const tid=this.activatedroute.snapshot.paramMap.get('id')
    this.instituteid=Number(tid);
    this.instituteservice.getInstitute(this.instituteid).subscribe((data:IInstitute)=>{this.institutedata=data})
    console.log(this.institutedata)
  }

}
