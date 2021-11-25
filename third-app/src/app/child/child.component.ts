import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {
  //<app-child [itemName] = "parentProperty">
  @Input()
  itemName : string = ""; 
  // <app-child (eventCounter) = "parentProperty = $event">
  @Output()
  eventCounter : EventEmitter<number> = new EventEmitter<number>();
  childCounter : number = 0;
  // call this function to emit the value represented by $event
  updateCounter() : void {
    this.childCounter++;
    this.eventCounter.emit(this.childCounter);
  }
}
