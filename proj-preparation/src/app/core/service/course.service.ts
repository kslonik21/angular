import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { ICourseItem } from '../../shared/models/courses-content.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  public courses: ICourseItem[];
  public pagination = '10';
  private URL = 'http://localhost:3004/courses';

  constructor(private http: HttpClient,private loaderService: LoaderService) {}

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
  public getCourseById(id: number):Observable<ICourseItem> {
    return this.http.get<ICourseItem>(`${this.URL}/${id}`);
  }
  public deleteCourse(id: number): Observable<ICourseItem> {
    return this.http.delete<ICourseItem>(`${this.URL}/${id}`);
  }
  public updateCourse(course: ICourseItem): Observable<ICourseItem> {
    return this.http.put<ICourseItem>(`${this.URL}/${course.id}`, course);
  }
}
