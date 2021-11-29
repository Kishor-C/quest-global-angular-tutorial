import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-rdf-user-info',
  templateUrl: './rdf-user-info.component.html',
  styleUrls: ['./rdf-user-info.component.css']
})
export class RdfUserInfoComponent  {
  user = new FormGroup({
    username : new FormControl('', Validators
      .compose([Validators.required, Validators.minLength(3)])),
    mobile : new FormControl('', Validators
      .compose([Validators.required, Validators.pattern("[0-9]{10,10}")]))
  })
  handleSubmit() {
    console.log(this.user);
    this.user.reset({username : this.user.controls['username'].value});
  }
}
