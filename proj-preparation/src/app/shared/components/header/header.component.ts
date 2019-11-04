import { Component, OnInit } from '@angular/core';
import { IName } from '../login/name.model';
import { Router } from '@angular/router';
import { UserService } from '../../../core/service/user.service';
import { IUser } from '../login/login.model';

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
  constructor(private userService: UserService,private router: Router) {}
  public ngOnInit() {
    this.userService.userSubject.subscribe((user: IUser) => {
      if (user) {
        this.name = user.name;
      }
    })
  }
  public onLogout(): void {
   this.userService.logout();
   this.router.navigate(['auth']);
 }
 public isAuthenticated(): boolean {
   return this.userService.isAuthenticated();
 }
}
