import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IAuthors } from '../../shared/models/authors.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private http: HttpClient){}
  authors: IAuthors[];
  URL = 'http://localhost:3004/authors';

  public getAuthors(): Observable<IAuthors[]> {
    return this.http.get<IAuthors[]>(this.URL);
  }
}
