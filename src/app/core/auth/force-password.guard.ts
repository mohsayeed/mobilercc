import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForcePasswordGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   return this.loggedIn()
  }

  loggedIn() {
    var isTokenpresent = !!localStorage.getItem('loginUser');
    if (isTokenpresent) {
      var jsonToken = JSON.parse(localStorage.getItem('loginUser'))
      var password_reset = jsonToken['passwordReset']
      if (password_reset)
        return true;
      else
        return false
    }
    else {
      return false
    }
  }
}
