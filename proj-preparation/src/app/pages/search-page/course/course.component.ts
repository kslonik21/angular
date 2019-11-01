import { Component, EventEmitter, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ICourseItem } from './courses-content.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() public course: ICourseItem
  @Output() public logId = new EventEmitter<number>();
  constructor(private router:Router) { }

  public onEdit(course: ICourseItem): void {
   this.router.navigate(['courses', course.id]);
 }
}
