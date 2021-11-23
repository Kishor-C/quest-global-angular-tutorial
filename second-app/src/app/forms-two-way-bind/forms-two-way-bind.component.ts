import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-two-way-bind',
  templateUrl: './forms-two-way-bind.component.html',
  styleUrls: ['./forms-two-way-bind.component.css']
})
export class FormsTwoWayBindComponent  {
  
  save(formValues: any) : void {
    console.log(formValues);
  }
}
