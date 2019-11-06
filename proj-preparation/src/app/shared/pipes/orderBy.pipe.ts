import { Pipe, PipeTransform } from '@angular/core';
import { ICourseItem } from '../interfaces/courses-content.model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(courses: ICourseItem[],orderBy:string) {
    return orderBy ? courses.sort((a,b) => b[orderBy] - a[orderBy]) : courses
  }
}
