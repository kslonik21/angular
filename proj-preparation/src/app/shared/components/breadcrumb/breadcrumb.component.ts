import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { CourseService } from '../../../core/service/course.service';
import { ICourseItem } from '../../models/courses-content.model';
import { IName } from '../../models/name.model';
import { AuthService } from '../../../core/service/auth.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  public title : string = '';
  public sub$: any;
  public showBreadcrumbs = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private coursesService: CourseService,
    private authService: AuthService
  ) {}
  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
  public ngOnInit() {
    this.sub$ = this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        const path = value.url.split('/');
        const id = path[2];
        if (id && path[1] === 'courses') {
          this.showBreadcrumbs = true;
          if (id === 'new') {
            this.title = id;
          } else {
            this.coursesService
              .getCourseById(+id)
              .subscribe((res: ICourseItem) =>
                this.title = res.title
              );
            }
          }
      }
    });
  }
  ngOnDestroy() {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
  }
}
