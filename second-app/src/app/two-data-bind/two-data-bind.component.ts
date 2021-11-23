import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-data-bind',
  templateUrl: './two-data-bind.component.html',
  styleUrls: ['./two-data-bind.component.css']
})
export class TwoDataBindComponent  {
  firstname : string | undefined = undefined;
  phoneNumber: number | undefined = undefined;
  updateData() {
    this.firstname = 'Sachin';
    this.phoneNumber = 99889993;
  }
}
