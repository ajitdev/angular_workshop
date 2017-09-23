import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private name: String = "Alien";
  private user: any = {};
  ngOnInit() {
    this.name = "Alien";
  }
  ReplaceMe() {
    this.name = this.user.name;
  }
}
