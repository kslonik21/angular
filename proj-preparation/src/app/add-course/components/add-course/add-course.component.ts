import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICourseItem } from '../../../pages/search-page/course/courses-content.model';
import { HTTPService } from '../../../core/service/httpservice.service';
import { Course } from '../../../shared/entities/course';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DatePipe]
})
// export interface ICourseItem {
//   topRated: boolean,
//   id: number,
//   title: string,
//   creationDate: number,
//   duration: number,
//   description: string
// }

export class AddCourseComponent implements OnInit {
  public course: ICourseItem;
  public titleControl: FormControl = new FormControl();
  public descriptionControl: FormControl = new FormControl();
  public creationControl: FormControl = new FormControl();
  public durationControl: FormControl = new FormControl();
  public courseForm: FormGroup = new FormGroup({
    title: this.titleControl,
    creationDate: this.creationControl,
    duration: this.durationControl,
    description: this.descriptionControl,
  });
  private exist = false;
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private courseService: HTTPService, private datePipe: DatePipe){}
  public ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      if(data.id!=='new') {
        this.course = this.courseService.getCourseById(+data.id);
        this.setFormValues();
        this.exist = true;
        console.log(this.course);
      }
    })
  }
  private setFormValues() {
    this.titleControl.setValue(this.course.title);
    this.descriptionControl.setValue(this.course.description);
    this.creationControl.setValue(this.datePipe.transform(this.course.creationDate, 'dd.MM.yyyy'));
    this.durationControl.setValue(this.course.duration);
    this.creationControl.valueChanges.subscribe((value: string) => {
      console.log('duration', value);
    });
  }
  public onSave(): void {
    if (!this.exist) {
      this.courseService.getCourses().subscribe(courses => {
        courses.sort((a,b) => a.id-b.id);
        const id = courses[courses.length-1].id + 1;
        this.course = new Course(false,id,this.courseForm.get('title').value,Date.now(),this.courseForm.get('duration').value,this.courseForm.get('description').value);
        this.setFormValues();
        this.courseService.createCourse(this.course).subscribe(() => this.router.navigate(['courses']));
     })
    }
    else {
      this.activatedRoute.params.subscribe(data => {
        const targetCourse = this.courseService.getCourseById(+data.id);
        this.course = new Course(targetCourse.topRated,data.id,this.courseForm.get('title').value,Date.now(),this.courseForm.get('duration').value,this.courseForm.get('description').value);
        this.setFormValues();
        this.courseService.updateCourse(this.course).subscribe(() => this.router.navigate(['courses']));
      })
    }
  }
}
