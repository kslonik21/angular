import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { IUser } from '../../interfaces/login.model';
import { IName } from '../../interfaces/name.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public name: IName = {
    first:'',
    last:''
  }
  constructor(private authService: AuthService,private router: Router) {}
  public ngOnInit() {
    this.initUser();
  }
  public initUser() {
    this.authService.userSubject
      .subscribe((user: IUser) => {
        if (user) {
          this.name = user.name;
          console.log(this.name);
        }
      })
  }
  public onLogout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
 }
 public isAuthenticated(): boolean {
   return this.authService.isAuthenticated();
 }
}
