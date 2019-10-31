import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { AuthService } from '../../../core/service/auth.service';
import { UserService } from '../../../core/service/user.service';
import { User } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public list=[];
  public username: string;
  public pass: string;
  // @Output() public clicked: EventEmitter<boolean> = new EventEmitter();
  constructor(private userStorageService: UserService){}
  ngOnInit() {
    this.retrieveUser();
    console.log(this.list);
  }
  retrieveUser() {
    this.userStorageService.getUsers().subscribe(val => {
      this.list = val;
    })
  }
  // isVisible() {
  //   this.clicked.emit(true);
  // }

 //  displayCourses() {
 //    console.log(this.userStorageService.isAuth());
 //  }
 //  addItem(name): void {
 //   this.userList = this.userStorageService.addItem({name});
 //   console.log(localStorage);
 // }
 // deleteItem(name) {
 //   this.userList = this.userStorageService.delete({name});
 //   console.log(localStorage);
 // }
}
