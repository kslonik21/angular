import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { IUser } from '../../shared/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userSubject = new Subject<any>();
  public tokenLocalStorageKey = 'token';
  private URL = 'http://localhost:3004/auth';

  constructor(private router:Router,private http: HttpClient) {}
  public login(login: string, password: string): Observable<any> {
    const body = {login,password};
    return this.http.post<any>(`${this.URL}/login`, body)
      .pipe(
        tap((result: any) => {
          localStorage.setItem(this.tokenLocalStorageKey,result.token);
          this.getUserInfo();
        })
      );
  }
  public logout(): void {
    localStorage.removeItem(this.tokenLocalStorageKey);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenLocalStorageKey) ? true : false;
  }
  public getUserInfo(): void {
    const body = {
      token: localStorage.getItem(this.tokenLocalStorageKey)
    }
    if (this.isAuthenticated()) {
      this.http.post<IUser>(`${this.URL}/userinfo`, body)
        .subscribe((user: IUser) => this.userSubject.next(user));
    }
  }
}
