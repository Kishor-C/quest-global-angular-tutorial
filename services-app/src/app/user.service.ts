import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // array to store user with firstname, lastname & phone
  users : any = [];
  constructor() { }
  
  save(user : any) : void {
    // stores the user passed in the argument in the array
    this.users.push(user);
  }

  fetchUsers() : any {
    return this.users;
  }
}
