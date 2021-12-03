import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'materials-app';
  constructor(private _builder : FormBuilder){ }
  simpleForm = this._builder.group({
    username : [''], password : ['']
  });
  skills = ["Java", "Angular", "Python"];
  save(e: any) : void {
    this.skills.push(e.value);
    e.chipInput?.clear();
  }
}
