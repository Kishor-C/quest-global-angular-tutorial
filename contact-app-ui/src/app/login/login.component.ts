import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder : FormBuilder, private _router: Router) { }
  loginForm = this._builder.group({
    profileId : ['', Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]
  });
  ngOnInit(): void {
  }
  authenticate() {
    let profileId = this.loginForm.controls['profileId'].value;
    this._router.navigate(['profile', profileId]);
  }
}
