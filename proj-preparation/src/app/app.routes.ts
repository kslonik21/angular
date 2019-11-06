import { Routes } from '@angular/router'
import { LoginComponent } from './shared/components/login/login.component';
import { AddCourseComponent } from './add-course/components/add-course/add-course.component';
import { CoursesComponent } from './pages/search-page/courses/courses.component';
import { CanActivateGuard } from './shared/guards/canactivate.guard';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent, canActivate: [CanActivateGuard]},

  {path: 'courses/:id', component: AddCourseComponent, canActivate: [CanActivateGuard]},
  {path: 'courses/new', component: AddCourseComponent, canActivate: [CanActivateGuard]},
  {path: 'auth', component: LoginComponent},
];
