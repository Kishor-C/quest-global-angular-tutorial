import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';
@Component({
  selector: 'app-color-transition',
  templateUrl: './color-transition.component.html',
  styleUrls: ['./color-transition.component.css'],
  animations: [trigger('redBlue', [
    state('red', style({color : 'red', fontSize : '12px'})),
    state('blue', style({color:'blue', fontSize : '18px'})),
    transition("red => blue", animate('500ms')),
    transition("blue => red", animate('500ms'))
  ])]
})
export class ColorTransitionComponent {
  colorType = 'red';
  changeColor() {
    if(this.colorType == 'red') {
      this.colorType = 'blue';
    } else {
      this.colorType = 'red';
    }
  }
}
