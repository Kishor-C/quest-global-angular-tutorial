import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-bind',
  templateUrl: './property-bind.component.html',
  styleUrls: ['./property-bind.component.css']
})
export class PropertyBindComponent  {
  isDisabled : boolean = false;
  divContent : string = "Hello div element";
  myInput : string | undefined = undefined;
  showError: boolean = true;
  
  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
  validateInput(x: string) {
    this.myInput = x;
    if(x.length < 3) { this.showError = false;}
    else { this.showError = true;} 
  }
}
