import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {

  constructor(private _service : UserService, private _builder : FormBuilder) { }

  ngOnInit(): void {
  }
  userForm = this._builder.group({
    firstname : [''], lastname : [''], phone : ['']
  });
  handleSubmit() {
    this._service.save(this.userForm.value);
    this.userForm.reset({});
  }
}
