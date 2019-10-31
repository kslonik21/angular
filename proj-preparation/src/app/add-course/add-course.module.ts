import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CreationDateComponent } from './components/creation-date/creation-date.component';
import { DurationComponent } from './components/duration/duration.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    CreationDateComponent,
    DurationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AddCourseComponent,
  ]
})
export class AddCourseModule { }
