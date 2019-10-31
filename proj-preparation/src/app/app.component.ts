import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [

  ]
})
export class AppComponent {
  constructor(){}
  greeting = "hello";
  title = 'project-preparation';
  public isLogin: boolean = false;
  public onclicked(isLogin): void {
    this.isLogin = isLogin;
  }
}
