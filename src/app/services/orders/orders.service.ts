import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constants/api-constants';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private httpService:HttpService, private router: Router) {}

  isOrderTodayPresent(userId:any , date:any){
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.ISORDERPRESENT,
      {},
      '?userid='+userId+'&date='+date
    )
  }

  enterOrder(userId:any,data:any,date:any){
    return this.httpService.requestCall(
      ApiMethod.POST,
      AuthEndPoints.ENTER_ORDER,
      data,
      '?id='+userId+'&date='+date
    )
  }




}

