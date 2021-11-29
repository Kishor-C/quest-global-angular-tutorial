import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-rdf-login',
  templateUrl: './rdf-login.component.html',
  styleUrls: ['./rdf-login.component.css']
})
export class RdfLoginComponent {
  username = new FormControl('', Validators.compose([Validators.required]));
  password = new FormControl('', 
    Validators.compose([Validators.required, Validators.minLength(2)]));
  handleClick() {
    this.username.setValue("");
    this.password.setValue("");
  }
}
