import { ICourseItem } from './courses-content.model';

export class Course implements ICourseItem {
  topRated: boolean = false;
  id: number;
  title: string;
  creationDate: number;
  duration: number;
  description: string;
  constructor(params: Partial<Course>) {
    Object.assign(this,params);
  }
}
