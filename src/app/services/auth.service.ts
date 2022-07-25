import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../core/http/http.service';
import { ApiMethod, AuthEndPoints } from '../core/constants/api-constants';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public _userInfoSub$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private httpService:HttpService, private router: Router) {}


  authenticateUser(userId: string, password: string){
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.AUTHENTICATE,
      {},
      '?UserName='+userId+'&Password='+password
    )
  }

  resetPassword(mobileLoginid:any , postData:any){
    return this.httpService.requestCall(
      ApiMethod.POST,
      AuthEndPoints.RESET_PASSWORD,
      postData,
      mobileLoginid,
    )
  }
}
