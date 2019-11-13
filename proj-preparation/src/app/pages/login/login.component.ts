import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../core/service/auth.service';
import { IUser } from '../../shared/models/login.model';
import { LoaderService } from '../../core/service/loader.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public login: string;
  public password: string;
  ngOnInit() {
    this.authService.logout();
  }
  constructor(
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ){}
  public logIn() {
    this.authService
      .login(this.login,this.password)
      .subscribe(
        () => this.router.navigate(['courses']),
        error => alert(error.error),
      )
  }
  public onEnd() {
    this.loaderService.hide();
  }
}
