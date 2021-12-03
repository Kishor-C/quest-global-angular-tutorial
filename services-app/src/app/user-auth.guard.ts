import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private _router : Router) {}
  // return true if you want to proceed else return false
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let id = route.paramMap.get('userId');
    let storedId = sessionStorage.getItem("user_id");
    if(id == storedId) {
      return true;
    }
    else {
      alert("You need to relogin to access this page");
      this._router.navigate([""]); // navigate to login component
      return false;
    }
  }
}
