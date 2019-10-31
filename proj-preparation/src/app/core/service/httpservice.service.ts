import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourseItem } from '../../pages/search-page/course/courses-content.model';


@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  public courses: ICourseItem[];
  private URL = 'http://localhost:3000/courses';
  constructor(private http: HttpClient) {}
  public getCourses(): Observable<ICourseItem[]> {
    return this.http.get<ICourseItem[]>(this.URL);
  }
  public pushCourse(course: ICourseItem): Observable<ICourseItem> {
    return this.http.post<ICourseItem>(this.URL, course);
  }
}
