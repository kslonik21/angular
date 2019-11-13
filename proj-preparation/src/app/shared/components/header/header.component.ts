import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
import { IName } from '../../models/name.model';
import { filter } from 'rxjs/operators';
import { IUser } from '../../models/login.model';

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
      .pipe(
        filter(user => user)
      )
      .subscribe(({name}) => {
        this.name = name;
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
