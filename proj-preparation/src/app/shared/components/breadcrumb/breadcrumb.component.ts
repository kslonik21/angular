import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../../../core/service/course.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent {
  constructor(private router: Router, private coursesService: CourseService) {}

  public getBreadcrumbsLength() {
    return this.router.url.slice(1).split('/').length;
  }
  public getBreadcrumbs() {
    return this.router.url.slice(1).split('/');
  }
  public getLastBreadcrumb() {
    const breadcrumbs: string[] = this.getBreadcrumbs();
    let lastBreadcrumb: string = breadcrumbs[breadcrumbs.length-1];
    if (lastBreadcrumb !== 'new') {
      lastBreadcrumb = this.coursesService.getCourseById(+lastBreadcrumb).title;
    }
    return lastBreadcrumb;
  }
  public navigateFromBreadcrumbs(index: number): void {
    const breadcrumbs: string[] = this.getBreadcrumbs();
    let navigateBreadcrumbs = '/';
    for (let i = 0; i < index + 1; i++) {
      navigateBreadcrumbs += breadcrumbs[i];
      if (i !== index) {
        navigateBreadcrumbs += '/';
      }
    }
    this.router.navigateByUrl(navigateBreadcrumbs);
  }
}
