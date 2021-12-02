import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _builder: FormBuilder, 
    private _service : UserService, private _router : Router) { }

  ngOnInit(): void {
  }
  loginForm = this._builder.group({
    id: [''], phone : ['']
  });
  user : any | undefined = undefined;
  error : any | undefined = undefined;
  authenticate() {
    let id = this.loginForm.controls['id'].value;
    let phone = this.loginForm.controls['phone'].value;
    this._service.fetchUser(id).subscribe((s) => {
      let temp = s;
      if(temp.phone == phone) {
        this._router.navigate(["success", id]);
      } else {
        this.error = "Sorry invalid credentials";
        this._router.navigate([""]);
      }
    }, (e) => {
      this.error = "Sorry invalid credentials";
      this._router.navigate([""]);
    });
    this.loginForm.reset({});
  }
}
