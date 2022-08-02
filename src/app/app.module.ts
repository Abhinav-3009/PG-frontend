import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { InstituteLoginComponent } from './institute-login/institute-login.component';
import { InstituteRegistrationComponent } from './institute-registration/institute-registration.component';
import { InstituteHomeComponent } from './institute-home/institute-home.component';
import { ScholarshipApplicationComponent } from './scholarship-application/scholarship-application.component';
import { InstituteStudentApplicationsComponent } from './institute-student-applications/institute-student-applications.component';


import { HttpClientModule } from '@angular/common/http';
import { ApplicationsForInstituteComponent } from './applications-for-institute/applications-for-institute.component';
import { NodalOfficerComponent } from './nodal-officer/nodal-officer.component';
import { MinistryComponent } from './ministry/ministry.component';
import { NodalLoginComponent } from './nodal-login/nodal-login.component';
import { MinistryLoginComponent } from './ministry-login/ministry-login.component';
import { NodalSchDetailsComponent } from './nodal-sch-details/nodal-sch-details.component';
import { NodalInsDetailsComponent } from './nodal-ins-details/nodal-ins-details.component';
import { MinistrySchDetailsComponent } from './ministry-sch-details/ministry-sch-details.component';
import { MinistryInsDetailsComponent } from './ministry-ins-details/ministry-ins-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    StudentRegistrationComponent,
    StudentLoginComponent,
    StudentHomeComponent,
    InstituteLoginComponent,
    InstituteRegistrationComponent,
    InstituteHomeComponent,
    ScholarshipApplicationComponent,
    InstituteStudentApplicationsComponent,
    ApplicationsForInstituteComponent,
    NodalOfficerComponent,
    MinistryComponent,
    NodalLoginComponent,
    MinistryLoginComponent,
    NodalSchDetailsComponent,
    NodalInsDetailsComponent,
    MinistrySchDetailsComponent,
    MinistryInsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
