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
  //@ts-ignore
  institutedata: IInstitute 

  instituteid: number = 0
  load:boolean=false
  constructor(private instituteservice: InstituteService, private activatedroute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const tid = this.activatedroute.snapshot.paramMap.get('id')
    //console.log(tid)
    this.instituteid = Number(tid);
    //console.log("institute id = " + this.instituteid)
    this.instituteservice.getInstitute(this.instituteid).subscribe((res) => {
      //console.log(res)
      this.institutedata=res
      this.load=true
      console.log(this.institutedata)
    }, (err) => {
      console.log(err)
    })
    
    console.log(this.institutedata)
  }

}
