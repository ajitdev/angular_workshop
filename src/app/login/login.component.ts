import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private name: String = "Alien";
  private user: any = {};
  ngOnInit() {
    this.name = "Alien";
  }
  ReplaceMe() {
    this.name = this.user.name;
  }
  ResetMe() {
    this.name = 'Alien';
  }

}
