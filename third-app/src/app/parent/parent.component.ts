import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  productName : string = "Laptop";
  userLists : string[] = ["Virat", "Rohith", "Yuvraj"];
  parentCounter : number = 0;
  x: number = 0;
  demo(x: number) : void {
    this.x = x;
  }
}
