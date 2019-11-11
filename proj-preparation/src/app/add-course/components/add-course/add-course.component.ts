import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { CourseService } from '../../../core/service/course.service';
import { Course } from '../../../shared/entities/course';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ICourseItem } from '../../../shared/interfaces/courses-content.model';
import { AuthorsService } from '../../../core/service/authors.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DatePipe]
})

export class AddCourseComponent implements OnInit {
  public course: ICourseItem;
  public titleControl: FormControl = new FormControl();
  public descriptionControl: FormControl = new FormControl();
  public creationControl: FormControl = new FormControl();
  public durationControl: FormControl = new FormControl();
  public authorsControl: FormControl = new FormControl([]);
  public courseForm: FormGroup = new FormGroup({
    title: this.titleControl,
    creationDate: this.creationControl,
    duration: this.durationControl,
    description: this.descriptionControl,
    authors: this.authorsControl
  });
  private courseExist = false;
  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private courseService: CourseService,
    private datePipe: DatePipe,
    private authorsService: AuthorsService
  ){}

  public ngOnInit() {
    this.activatedRoute.params
      .subscribe(data => {
        if(data.id!=='new') {
          this.course = this.courseService.getCourseById(+data.id);
          this.setFormValues();
          this.courseExist = true;
        }
      })
  }
  public createNewCourse() {
    this.courseService
      .getCourses()
      .subscribe(courses => {
        const id = courses[courses.length-1].id + 1;
        const titleValue = this.courseForm.get('title').value;
        const durationValue = this.courseForm.get('duration').value;
        const descriptionValue = this.courseForm.get('description').value;
        const topRated = false;
        this.course = new Course(topRated,id,titleValue,Date.now(),durationValue,descriptionValue);
        this.setFormValues();
        this.courseService
          .createCourse(this.course)
          .subscribe(() => this.router.navigate(['courses']));
      })
  }
  public updateTargetCourse() {
    this.activatedRoute.params
      .subscribe(data => {
        const targetCourse = this.courseService.getCourseById(+data.id);
        const {topRated} = targetCourse;
        const titleValue = this.courseForm.get('title').value;
        const durationValue = this.courseForm.get('duration').value;
        const descriptionValue = this.courseForm.get('description').value;
        const id = data.id
        this.course = new Course(topRated,id,titleValue,Date.now(),durationValue,descriptionValue)
        this.setFormValues();
        this.courseService
          .updateCourse(this.course)
          .subscribe(() => this.router.navigate(['courses']));
      })
  }
  private setFormValues() {
    this.titleControl.setValue(this.course.title);
    this.descriptionControl.setValue(this.course.description);
    this.creationControl.setValue(this.datePipe.transform(this.course.creationDate, 'dd.MM.yyyy'));
    this.durationControl.setValue(this.course.duration);
  }
  public onSave(): void {
    if (!this.courseExist) {
      this.createNewCourse();
    }
    else {
      this.updateTargetCourse();
    }
  }
  public onCancel() {
    this.router.navigate(['courses']);
  }
}
