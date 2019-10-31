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
    durationDate: this.durationControl,
    description: this.descriptionControl,
  });
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private courseService: HTTPService, private datePipe: DatePipe){}
  public ngOnInit() {
      // this.activatedRoute.params.subscribe(data => console.log(data));
    this.courseService.getCourses().subscribe(courses => {
      courses.sort((a,b) => a.id-b.id);
      const id = courses[courses.length-1].id + 1;
      this.course = new Course(false,id,null,Date.now(),null,null);
      this.setFormValues();
      console.log(this.course);
    })
  }
  private setFormValues() {
    this.titleControl.setValue(this.course.title);
    this.descriptionControl.setValue(this.course.description);
    this.creationControl.setValue(this.datePipe.transform(this.course.creationDate, 'dd.MM.yyyy'));
    this.creationControl.setValue(this.course.duration);
    this.creationControl.valueChanges.subscribe((value: string) => {
      console.log('duration', value);
    });
    console.log(this.courseForm);

  }
  public onSave(): void {

    this.courseService.pushCourse(this.course).subscribe(val => console.log(val));

}
}
