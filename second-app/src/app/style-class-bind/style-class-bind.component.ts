import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-class-bind',
  templateUrl: './style-class-bind.component.html',
  styleUrls: ['./style-class-bind.component.css']
})
export class StyleClassBindComponent  {
  myStyle1 = {"background-color":"yellow", "color":"blue"}
  myStyle2 = {"background-color":"black", "color":"white"}
  addClass : boolean = true;
  changeColor() : void {
    this.addClass = !this.addClass;
  }
}
