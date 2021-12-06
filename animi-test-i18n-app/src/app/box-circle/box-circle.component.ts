import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-box-circle',
  templateUrl: './box-circle.component.html',
  styleUrls: ['./box-circle.component.css'],
  animations : [
    trigger('boxRound', [
      state('box', style({borderRadius : '0%'})),
      state('circle', style({borderRadius : '50%'})),
      transition('box => circle', animate('1s')),
      transition('circle => box', animate('1s'))
    ])
  ]
})
export class BoxCircleComponent  {
  shape = 'box';
  changeShape() {
    if(this.shape == 'box') {
      this.shape = 'circle';
    } else {
      this.shape = 'box';
    }
  }
}
