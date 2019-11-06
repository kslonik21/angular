import { ICourseItem } from '../interfaces/courses-content.model';

export class Course implements ICourseItem {
  topRated: boolean;
  id: number;
  title: string;
  creationDate: number;
  duration: number;
  description: string;
  constructor(topRated: boolean,id: number,title: string,creationDate: number,duration: number,description: string) {
    this.topRated = topRated;
    this.id = id;
    this.title = title;
    this.creationDate = creationDate;
    this.duration = duration;
    this.description = description;
  }
}
