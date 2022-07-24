import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpService } from '../core/http/http.service';
import { ApiMethod, AuthEndPoints } from '../core/constants/api-constants';
@Injectable({
  providedIn: 'root',
})
export class DailyratesService {
  public _dailyRatesInfo$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private httpService: HttpService) {}

  getLatestRates() {
    return this.httpService.requestCall(
      ApiMethod.GET,
      AuthEndPoints.LATEST_RATES,
  );
  }
}
