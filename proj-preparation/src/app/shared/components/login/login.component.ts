import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { AuthService } from '../../../core/service/auth.service';
import { UserService } from '../../../core/service/user.service';
import { IUser } from './login.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public login: string;
  public password: string;

  constructor(private router: Router,private userService: UserService){}
  public logIn() {
    this.userService.login(this.login,this.password).subscribe(() => this.router.navigate(['courses']), error => alert(error.error));
  }
}
