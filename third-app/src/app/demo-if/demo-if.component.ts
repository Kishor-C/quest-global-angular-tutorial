import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-if',
  templateUrl: './demo-if.component.html',
  styleUrls: ['./demo-if.component.css']
})
export class DemoIfComponent {
  isAvailable = false;
  name : string | undefined = undefined;
  counter : number = 0;
  toggle() : void {
    this.isAvailable = !this.isAvailable;
    this.counter++;
    if(this.counter % 3 == 0) {
      this.name = "Raj"
    } else {
      this.name = undefined;
    }
  }
}
