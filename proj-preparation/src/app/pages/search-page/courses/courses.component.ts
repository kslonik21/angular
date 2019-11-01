import { Component, OnInit, Inject } from '@angular/core';
// import { CourseItemPublicService } from '../../../core/service/course-item-public.service';
import { HTTPService } from '../../../core/service/httpservice.service';
import { Router } from '@angular/router';
import { ICourseItem } from '../course/courses-content.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public searchable: string = '';
  public searchText: string = '';
  public courses: ICourseItem[] = [];
  constructor(private coursesService: HTTPService,private router:Router) {}
  public ngOnInit(): void {
    this.getCourses();
  }
  private getCourses(): void {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
      this.coursesService.courses = this.courses;
    });
}
  public setSearchable(): void{
    this.searchable = this.searchText;
  };

  public logId(id: number): void {
    console.log(id);
  }
  public onAddCourse(): void {
    this.router.navigate(['courses', 'new']);
  }
}
