import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICourseItem } from '../../shared/interfaces/courses-content.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courses: ICourseItem[];
  public pagination = '10';
  private URL = 'http://localhost:3004/courses';

  constructor(private http: HttpClient) {}

  public getCoursesWithParams(start: number, textFragment: string = ''): Observable<ICourseItem[]> {
    const params = {start: `${start}`, count: this.pagination, textFragment: textFragment};
    return this.http.get<ICourseItem[]>(this.URL, {params: params});
 }
  public getCourses(): Observable<ICourseItem[]> {
    return this.http.get<ICourseItem[]>(this.URL);
  }
  public createCourse(course: ICourseItem): Observable<ICourseItem> {
    return this.http.post<ICourseItem>(this.URL, course);
  }
  public getCourseById(id: number): ICourseItem {
    return this.courses.find(course => course.id === id);
  }
  public deleteCourse(id: number): Observable<ICourseItem> {
    return this.http.delete<ICourseItem>(`${this.URL}/${id}`);
  }
  public updateCourse(course: ICourseItem): Observable<ICourseItem> {
    return this.http.put<ICourseItem>(`${this.URL}/${course.id}`, course);
  }
}
