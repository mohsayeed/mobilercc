import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.loggedIn()){
    var jsonToken = JSON.parse(localStorage.getItem('loginUser'))
    var password_reset = jsonToken['passwordReset']
    if(password_reset){
      this.router.navigate(['/login'])
      return false
    }
    else
    return true;
   }
   else{
    this.router.navigate(['/login']);
    return false;
   }
  }


  loggedIn(){
    return !!localStorage.getItem('loginUser');
  }
}
