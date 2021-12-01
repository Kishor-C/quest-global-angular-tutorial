import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // array to store user with firstname, lastname & phone
  //users : any = [];
  url = "http://localhost:3000/users";
  constructor(private _http : HttpClient) { }
  save(user : any) : Observable<any> {
   return this._http.post(this.url, user);
  }
  fetchUsers() : Observable<any> {
    return this._http.get(this.url);
  }
  fetchUser(id : number) : Observable<any> {
    let urlById = `${this.url}/${id}`; // http://localhost:3000/users/100
    return this._http.get(urlById);
  }
  deleteUserById(id : number) : Observable<any> {
    let urlDelete = `${this.url}/${id}`;
    return this._http.delete(urlDelete);
  }
}
