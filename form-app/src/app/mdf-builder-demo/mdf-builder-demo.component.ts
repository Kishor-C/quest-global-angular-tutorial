import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-mdf-builder-demo',
  templateUrl: './mdf-builder-demo.component.html',
  styleUrls: ['./mdf-builder-demo.component.css']
})
export class MdfBuilderDemoComponent  {

  constructor(private _builder : FormBuilder) { }

  userForm = this._builder.group({
    firstname : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    lastname : ['', Validators.compose([Validators.required, Validators.minLength(2)])]
  });
  handleSubmit() : void {
    console.log(this.userForm.controls['firstname'].value);
    console.log(this.userForm.controls['lastname'].value);
    this.userForm.reset({}); // clears form control
  }
}
