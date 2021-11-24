import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-for',
  templateUrl: './demo-for.component.html',
  styleUrls: ['./demo-for.component.css']
})
export class DemoForComponent {
  topRatedFilms : string[] = 
    ["Shawshank Redemption", 
    "Forrest Gump", "Cast Away", "Pursuit of Happyness"];

  usersList : any = [
    {name:"Raj", age : 35, email:"raj@gmail.com"}, 
    {name:"Yuvraj", age: 40, email: "yuvi@gmail.com"}]
}
