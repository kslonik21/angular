import { Routes } from '@angular/router'
import { LoginComponent } from './shared/components/login/login.component';
import { AddCourseComponent } from './add-course/components/add-course/add-course.component';
import { CoursesComponent } from './pages/search-page/courses/courses.component';

export const ROUTES: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesComponent},

  {path: 'courses/:id', component: AddCourseComponent},
  {path: 'courses/new', component: AddCourseComponent},
  {path: 'auth', component: LoginComponent},
];
