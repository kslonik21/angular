import { Pipe, PipeTransform } from '@angular/core';
import {  ICourseItem  } from '../models/courses-content.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourseItem[]) {
    if(courses) {
      return courses.sort(
        (a,b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime()
      );
    }
  }
}
