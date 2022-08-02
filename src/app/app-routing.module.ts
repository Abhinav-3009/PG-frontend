import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { InstituteStudentApplicationsComponent } from './institute-student-applications/institute-student-applications.component';
import { ScholarshipApplicationComponent } from './scholarship-application/scholarship-application.component';
import { ApplicationsForInstituteComponent } from './applications-for-institute/applications-for-institute.component';
import { NodalOfficerComponent } from './nodal-officer/nodal-officer.component';
import { MinistryComponent } from './ministry/ministry.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import {NodalSchDetailsComponent} from './nodal-sch-details/nodal-sch-details.component';
import { NodalInsDetailsComponent } from './nodal-ins-details/nodal-ins-details.component';
import { MinistryInsDetailsComponent } from './ministry-ins-details/ministry-ins-details.component';
import { MinistrySchDetailsComponent } from './ministry-sch-details/ministry-sch-details.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'StudentHome/:id',component:StudentHomeComponent},
  {path:'StudentLogin',component:StudentLoginComponent},
  {path:'StudentRegistration',component:StudentRegistrationComponent},
  {path:'InstituteHome/:id',component:InstituteHomeComponent},
  {path:'InstituteLogin',component:InstituteLoginComponent},
  {path:'InstituteRegistration',component:InstituteRegistrationComponent},
  {path:'InstituteStudentApplication/:id',component:InstituteStudentApplicationsComponent},
  {path:'ScholarshipApplication/:id',component:ScholarshipApplicationComponent},
  {path:'ApplicationForInstitute/:id', component:ApplicationsForInstituteComponent},
  {path:'NodalOfficer',component:NodalOfficerComponent},
  {path:'NodalLogin',component:NodalLoginComponent},
  {path:'Ministry',component:MinistryComponent},
  {path:'MinistryLogin',component:MinistryLoginComponent},
  {path:'NodalSchDetails/:id',component:NodalSchDetailsComponent},
  {path:'NodalInsDetails/:id',component:NodalInsDetailsComponent},
  {path:'MinistryInsDetails/:id',component:MinistryInsDetailsComponent},
  {path:'MinistrySchDetails/:id',component:MinistrySchDetailsComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
