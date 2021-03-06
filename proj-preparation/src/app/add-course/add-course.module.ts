import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CreationDateComponent } from './components/creation-date/creation-date.component';
import { DurationComponent } from './components/duration/duration.component';
import { SharedModule } from '../shared/shared.module';
import { AuthorsComponent } from './components/authors/authors.component';

@NgModule({
  declarations: [
    AddCourseComponent,
    CreationDateComponent,
    DurationComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class AddCourseModule { }
