import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind2',
  templateUrl: './event-bind2.component.html',
  styleUrls: ['./event-bind2.component.css']
})
export class EventBind2Component {
  username : string | undefined = undefined;
  password : string | undefined = undefined;

  handleClick(un: any, pw: any) : void{
    this.username = un;
    this.password = pw;
  }
}
