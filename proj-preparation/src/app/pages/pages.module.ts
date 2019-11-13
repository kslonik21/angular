import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './search-page/course/course.component';
import { CoursesComponent } from './search-page/courses/courses.component';
import { SearchComponent } from './search-page/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesComponent,
    SearchComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  // exports: [
  //   CoursesComponent,
  // ]
})
export class PagesModule {}
