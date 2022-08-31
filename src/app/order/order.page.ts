import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { DailyratesService } from '../services/dailyrates.service';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  providers:[DatePipe]
})


export class OrderPage implements OnInit {
today = new Date()
isOrderPresent :any;
isDisableButton:boolean
submittButtonTxt:string;
  constructor(private alertController: AlertController,
    private orderService: OrdersService,
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private dailyRatesService : DailyratesService) { }
  orders : number
  userId :number;
  cutOffTime:string
  ngOnInit() {
   this.getOrdersData();
  }
  getOrdersData(event?:any){
    let response = JSON.parse( localStorage.getItem( 'loginUser' ) );
    this.userId = (response.userId);
    this.orderService
    .isOrderTodayPresent(this.userId,this.datePipe.transform(this.today, 'yyyy-MM-dd'))
    .pipe()
    .subscribe((result)=>{
      this.isOrderPresent = result.isOrderPresent;
      if(this.isOrderPresent==false){
        this.toastr.success('Order the Cages Right Now ... :))');
        this.orders = 0
        this.submittButtonTxt = 'Please Order Now !!'
        this.isDisable()
      }
      else{
        this.orders = result.order.orderCages
        this.submittButtonTxt = 'Update Order'
        this.isDisable()
      }
      if (event)
          event.target.complete();
    },
    (error)=>{
      if (event)
          event.target.complete();
    })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure Want to Order '+ this.orders + ' Cages ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { 
            let data = 
              {
                "orderId": 0,
                "userId": this.userId,
                "orderDate": this.datePipe.transform(this.today, 'yyyy-MM-dd'),
                "orderCages": this.orders,
                "updatedBy": 1,
                "updatedDt": this.today
              }
            
            this.orderService
            .enterOrder(this.userId,data,this.datePipe.transform(this.today, 'yyyy-MM-dd'))
            .pipe()
            .subscribe(
              (result)=>{
                this.submittButtonTxt = 'Update Order'
                this.toastr.success('Your Order has Successfully Placed');
              },
              (error)=>{
                this.toastr.error('Please Retry After Some Time');
              }
            )
           }
        }
      ]
    });

    await alert.present();
  }

  isDisable(){
    this.dailyRatesService.getLatestRates().pipe().subscribe(
      (response)=>{
        let data = (response)
        let today = new Date();
        let hour = today.getHours()
        let min = today.getMinutes()
        // let givenHour = 17
        // let givenMin = 30
        this.cutOffTime = data.cutOffTime
        let splitted = data.cutOffTime.split(":");
        let givenHour = splitted[0]
        let givenMin = splitted[1]
       

        if(hour<givenHour){
          this.isDisableButton = false 
        }
        else{
          if(hour==givenHour){
            if(min<=givenMin){
              this.isDisableButton = false
            }
            else{
              this.isDisableButton= true
            }
          }
          else{
            this.isDisableButton = true
          }
        }
      }
    )
  }

}
