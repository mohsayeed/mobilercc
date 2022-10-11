import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  providers:[DatePipe]

})
export class ReportsPage implements OnInit {

  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] ;
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
  };
  public lineChartLegend = true;
  public userId:any;
  public topTenRecords:any;
  constructor(private orderService:OrdersService,
    private datePipe: DatePipe) {}
  label_dates:any = []
  label_cages:any = []
  ngOnInit() {
    this.getReports();
  }
  getReports(event?:any){
    let response = JSON.parse( localStorage.getItem( 'loginUser' ) );
    this.userId = (response.userId);
    this.orderService
      .getTopTenRecords(this.userId)
      .pipe()
      .subscribe((result)=>{
        this.topTenRecords=result 
        this.convertJsonToArray_labels()
        this.lineChartData =  {
          labels: this.label_dates,
          datasets: [
            {
              data: this.label_cages,
              label: 'Series A',
              fill: true,
              tension: 0.5,
              borderColor: 'black',
              backgroundColor: 'rgba(255,0,0,0.3)',
            },
          ],
        };
        if (event)
          event.target.complete();
      },
      (error)=>{
        if (event)
          event.target.complete();
      })
  }
  convertJsonToArray_labels(){
    this.label_dates = []
    this.label_cages = []
    for(var i =0;i<this.topTenRecords.orders.length;i++){
      this.label_dates.push(this.datePipe.transform(this.topTenRecords.orders[i].orderDate, 'MMM-d-Y'))
      this.label_cages.push(this.topTenRecords.orders[i].orderCages)
    }
  }
}
