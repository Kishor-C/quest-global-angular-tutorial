import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  productName : string = "Laptop";
  userLists : string[] = ["Virat", "Rohith", "Yuvraj"];
}
