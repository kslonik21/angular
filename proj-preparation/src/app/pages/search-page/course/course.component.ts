import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ICourseItem } from '../../../shared/models/courses-content.model';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent {
  @Input() public course: ICourseItem
  @Output() public delete:EventEmitter<ICourseItem> = new EventEmitter<ICourseItem>();
  constructor(private router:Router) { }

  public onEdit(course: ICourseItem): void {
   this.router.navigate(['courses', course.id]);
  }
  public onDelete(event): void {
    event.stopPropagation();
    this.delete.emit(this.course);
  }
}
