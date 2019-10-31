import { Component, OnInit, Inject } from '@angular/core';
// import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
import { ICourseItem } from '../course/courses-content.model';
import { HTTPService } from '../../../core/service/httpservice.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public searchable: string = '';
  public searchText: string = '';
  public courseList = [];
  constructor(private coursesService: HTTPService) {}
  public ngOnInit(): void {
    this.getCourses();
  }
  private getCourses(): void {
    this.coursesService.getCourses().subscribe(course => {
      this.courseList = course;
    })
  }
  public setSearchable(): void{
    this.searchable = this.searchText;
  };

  public logId(id: number): void {
    console.log(id);
  }
}
