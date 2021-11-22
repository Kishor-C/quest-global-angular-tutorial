import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent {
  counter: number = 0;
  characterCounter : number = 0;
  // demo is called when you click on a button
  demo() : void {
    console.log("demo() is called")
    this.counter = this.counter + 1;
  }
  // countChars is called everytime you enter input
  countChars() : void {
    console.log("countChars() is called")
    this.characterCounter = this.characterCounter + 1;
  }
}
