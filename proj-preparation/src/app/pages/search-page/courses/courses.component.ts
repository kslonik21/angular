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
  public courses: ICourseItem[] = [];
  public currentPage = 0;
  public lastPage = 0;
  constructor(private coursesService: HTTPService,private router:Router) {}
  public ngOnInit(): void {
    this.getCourses();
  }
  private getCourses(): void {
    this.coursesService.getCoursesWithParams(0).subscribe(courses => {
      this.courses = courses;
      this.coursesService.courses = this.courses;
    });
  }
  public onDelete(course: ICourseItem): void {
    this.coursesService.deleteCourse(course.id).subscribe(() => {
      this.currentPage = 0;
      this.coursesService.getCoursesWithParams(this.currentPage).subscribe(courses => {
        this.courses = courses;
        this.coursesService.courses = this.courses;
      });
    });
  }
  public onShowMore() {
    this.coursesService.getCoursesWithParams(++this.currentPage* +this.coursesService.pagination)
     .subscribe(courses => {
       this.courses = this.courses.concat(courses);
       this.coursesService.courses = this.courses;
       this.lastPage = !courses.length;
     })
  }
  public onAddCourse(): void {
    this.router.navigate(['courses', 'new']);
  }
}
