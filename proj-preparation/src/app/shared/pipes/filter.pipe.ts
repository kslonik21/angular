import { Pipe, PipeTransform } from '@angular/core';
import { ICourseItem } from '../interfaces/courses-content.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: ICourseItem[], searchText: string): ICourseItem[] {
    if(!items || !searchText) {
      return items;
    }
    return items.filter(item => item.title.includes(searchText));
  }
}
