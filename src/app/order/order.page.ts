import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
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
submittButtonTxt:string;
  constructor(private alertController: AlertController,
    private authService: AuthService,
    private orderService: OrdersService,
    private datePipe: DatePipe) { }
  orders : number
  userId :number;
  ngOnInit() {
    let response = JSON.parse( localStorage.getItem( 'loginUser' ) );
      this.userId = (response.userId);
      this.orderService
      .isOrderTodayPresent(this.userId,this.datePipe.transform(this.today, 'yyyy-MM-dd'))
      .pipe()
      .subscribe((result)=>{
        this.isOrderPresent = result.isOrderPresent;
        if(this.isOrderPresent==false){
          this.orders = 0
          this.submittButtonTxt = 'Please Order Now !!'
        }
        else{
          this.orders = result.order.orderCages
          this.submittButtonTxt = 'Update Order'
        }
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
                console.log(result)
              },
              (error)=>{
                console.log(error)
              }
            )
           }
        }
      ]
    });

    await alert.present();
  }

}
