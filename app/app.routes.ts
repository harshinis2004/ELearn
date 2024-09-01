import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';
import { CourseComponent } from './course/course.component';
import { OnecourseComponent } from './onecourse/onecourse.component';
import { OnecoursecatComponent } from './onecoursecat/onecoursecat.component';
import { OnecoursejeeComponent } from './onecoursejee/onecoursejee.component';
import { OnecoursebankComponent } from './onecoursebank/onecoursebank.component';
import { OnecourseupscComponent } from './onecourseupsc/onecourseupsc.component';
import { OnecourserailComponent } from './onecourserail/onecourserail.component';
import { OnecoursenavyComponent } from './onecoursenavy/onecoursenavy.component';
import { OnecoursegateComponent } from './onecoursegate/onecoursegate.component';
import { OnecoursedefenceComponent } from './onecoursedefence/onecoursedefence.component';
import { VideocatComponent } from './videocat/videocat.component';
import { VideojeeComponent } from './videojee/videojee.component';
import { VideobankComponent } from './videobank/videobank.component';
import { VideoupscComponent } from './videoupsc/videoupsc.component';
import { VideorailComponent } from './videorail/videorail.component';
import { VideonavyComponent } from './videonavy/videonavy.component';
import { VideogateComponent } from './videogate/videogate.component';
import { VideodefenceComponent } from './videodefence/videodefence.component';
import { TestComponent } from './test/test.component';

export const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {path:'video',component:VideoComponent},
  {path:'course',component:CourseComponent},
  {path:'onecourse',component:OnecourseComponent},
  {path:'onecoursecat',component:OnecoursecatComponent},
  {path:'onecoursejee',component:OnecoursejeeComponent},
  {path:'onecoursebank',component:OnecoursebankComponent},
  {path:'onecourseupsc',component:OnecourseupscComponent},
  {path:'onecourserail',component:OnecourserailComponent},
  {path:'onecoursenavy',component:OnecoursenavyComponent},
  {path:'onecoursegate',component:OnecoursegateComponent},
  {path:'onecoursedefence',component:OnecoursedefenceComponent},
  {path:'videocat',component:VideocatComponent},
  {path:'videojee',component:VideojeeComponent},
  {path:'videobank',component:VideobankComponent},
  {path:'videoupsc',component:VideoupscComponent},
  {path:'videorail',component:VideorailComponent},
  {path:'videonavy',component:VideonavyComponent},
  {path:'videogate',component:VideogateComponent},
  {path:'videodefence',component:VideodefenceComponent},
  {path:'test',component:TestComponent},

  {path: '**',redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
