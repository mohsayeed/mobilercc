import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
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
  constructor(private orderService:OrdersService) {}
  label_dates:any = []
  label_cages:any = []
  ngOnInit() {
    let response = JSON.parse( localStorage.getItem( 'loginUser' ) );
    this.userId = (response.userId);
    this.orderService
      .getTopTenRecords(this.userId)
      .pipe()
      .subscribe((result)=>{
        this.topTenRecords=result 
        console.log(result)
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
      })
  }
  convertJsonToArray_labels(){
    for(var i =0;i<this.topTenRecords.orders.length;i++){
      this.label_dates.push(this.topTenRecords.orders[i].orderDate)
      this.label_cages.push(this.topTenRecords.orders[i].orderCages)
    }
  }
}
