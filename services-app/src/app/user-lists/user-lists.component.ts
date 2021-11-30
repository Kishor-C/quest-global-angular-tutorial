import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.css']
})
export class UserListsComponent implements OnInit {
  users : any = [];
  constructor(private _service : UserService) { }

  ngOnInit(): void {
  }
  refresh() {
    this.users = this._service.fetchUsers();
  }

}
