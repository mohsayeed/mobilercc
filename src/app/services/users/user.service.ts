import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/http/http.service';
import { ApiMethod, AuthEndPoints } from 'src/app/core/constants/api-constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  getUserName(userId: any) {
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.GET_USERNAME,
      {},
      userId
    );
  }
  isVisibleForCustomers() {
    // eslint-disable-next-line eqeqeq
    if (localStorage.getItem('vendorCode') == 'CU') {
      return true;
    } else {
      return false;
    }
  }
}
