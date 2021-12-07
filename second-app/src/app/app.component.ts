import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'second-app';
  status = false;
  constructor() {
    console.log("constructor() in the AppComponent")
  }
  ngOnInit() {
    console.log("ngOnInit() is called in the AppComponent")
  }
  changeStatus() {
    this.status = !this.status;
  }
}
