import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-fetch',
  templateUrl: './user-fetch.component.html',
  styleUrls: ['./user-fetch.component.css']
})
export class UserFetchComponent implements OnInit {
  constructor(private _builder : FormBuilder, private _service : UserService) { }

  ngOnInit(): void {
  }
  idForm = this._builder.group({id : ['']});
  user : any | undefined = undefined;
  error : any | undefined = undefined;
  search() {
    this._service.fetchUser(this.idForm.controls['id'].value)
    .subscribe(response => {
      this.user = response;
      this.error = undefined;
    }, 
      err => {
        this.error = `Sorry ${this.idForm.controls['id'].value} is not found`;
        this.user = undefined;
      });
  }
}
