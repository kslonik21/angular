import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/components/login/login.model';
// const storageName = 'usermodel';
// const userData = [
//   {name: 'Alex'},
//   {name: "Tom"}
// ];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user: User[];
  private storageData;
  public URL = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
    // this.storageData = JSON.parse(localStorage.getItem(storageName)) || userData;

  // get() {
  //   return [...this.storageData]
  // }
  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL);
  }
  public pushUser(u: User): Observable<User> {
    return this.http.post<User>(this.URL, u);
  }
 //  update() {
 //   localStorage.setItem(storageName, JSON.stringify(this.storageData));
 //   return this.get();
 // }
 //  post(user) {
 //    this.storageData.push(user);
 //    return this.update();
 //  }
 //  userIndex(user) {
 //    return this.storageData.indexOf(user);
 //  }
 //  destroy(user) {
 //    this.storageData.splice(this.userIndex(user),1);
 //    return this.update();
 //  }
}
