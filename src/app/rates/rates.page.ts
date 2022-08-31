import { Component, OnInit } from '@angular/core';
import { DailyratesService } from '../services/dailyrates.service';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
})
export class RatesPage implements OnInit {
  constructor(private dailyRatesService: DailyratesService) {}
  orders: any  = {
    "dailyDate": "2022-07-21T00:00:00",
    "liveRate": 200,
    "skinlessRate": 200,
    "withSkinRate": 200,
    "cutOffTime": "000"
  }
  ngOnInit() {
    this.getDailyRates();
  }
  getDailyRates(event?:any){
    this.dailyRatesService
      .getLatestRates()
      .pipe()
      .subscribe(
        (result) => {
          this.orders = result
          this.dailyRatesService._dailyRatesInfo$.next(result)
          if (event)
          event.target.complete();
        },
        (error) => {
          if (event)
          event.target.complete();
        }
      );
  }
}
