import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
   if(this.loggedIn()){
    return false;
   }
   else{
    return true;
   }
  }


  loggedIn(){
    var isTokenpresent = !!localStorage.getItem('loginUser');
    if(isTokenpresent){
      var jsonToken = JSON.parse(localStorage.getItem('loginUser'))
      var password_reset = jsonToken['passwordReset']
      if(password_reset)
      return false;
      else
      return true
    }
    else{
    return !!localStorage.getItem('loginUser');
  }
  }
}
