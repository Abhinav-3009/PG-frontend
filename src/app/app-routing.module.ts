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





const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'AboutUs',component:AboutUsComponent},
  {path:'ContactUs',component:ContactUsComponent},
  {path:'StudentHome',component:StudentHomeComponent},
  {path:'StudentLogin',component:StudentLoginComponent},
  {path:'StudentRegistration',component:StudentRegistrationComponent},
  {path:'InstituteHome',component:InstituteHomeComponent},
  {path:'InstituteLogin',component:InstituteLoginComponent},
  {path:'InstituteRegistration',component:InstituteRegistrationComponent},
  {path:'InstituteStudentApplication',component:InstituteStudentApplicationsComponent},
  {path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
