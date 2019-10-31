import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public userLoginPlaceholder: string = "User Login";
  public buttonLogOffText: string = "Log Off";
}
