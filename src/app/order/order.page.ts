import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { DailyratesService } from '../services/dailyrates.service';
import { OrdersService } from '../services/orders/orders.service';
import { API, APIDefinition, Columns, Config, DefaultConfig } from 'ngx-easy-table';
import { Observable } from 'rxjs';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class OrderPage implements OnInit {
  @ViewChild('table', { static: true }) table: APIDefinition;

  today = new Date()
  public configuration: Config;
  public data$: Observable<any>;
  public columns: Columns[];
  isOrderPresent: any;
  isDisableButton: boolean
  submittButtonTxt: string;
  constructor(private alertController: AlertController,
    private orderService: OrdersService,
    public datePipe: DatePipe,
    private toastr: ToastrService,
    private dailyRatesService: DailyratesService,
    public userService:UserService
    ) { }
  orders: number
  userId: number;
  totalNoOfCages:any;
  cutOffTime: string;
  date: any
  ngOnInit() {
    if (this.userService.isVisibleForCustomers()) {
      this.getOrdersData()
    }
    else{
    this.configuration = { ...DefaultConfig };
    this.columns = [
      { key: 'useR_NAME', title: 'User Name' },
      { key: 'ordeR_CAGES', title: 'Order Cages' }
    ];
    this.date = this.datePipe.transform(this.today, 'yyyy-MM-dd')
    this.getAllUsersDataByDate(this.date);
    }
  }
  getOrdersData(event?: any) {
    let response = JSON.parse(localStorage.getItem('loginUser'));
    this.userId = (response.userId);
    this.orderService
      .isOrderTodayPresent(this.userId, this.datePipe.transform(this.today, 'yyyy-MM-dd'))
      .pipe()
      .subscribe((result) => {
        this.isOrderPresent = result.isOrderPresent;
        if (this.isOrderPresent == false) {
          this.toastr.success('Order the Cages Right Now ... :))');
          this.orders = 0
          this.submittButtonTxt = 'Please Order Now !!'
          this.isDisable()
        }
        else {
          this.orders = result.order.orderCages
          this.submittButtonTxt = 'Update Order'
          this.isDisable()
        }
        if (event)
          event.target.complete();
      },
        (error) => {
          if (event)
            event.target.complete();
        })
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Are You Sure Want to Order ' + this.orders + ' Cages ?',
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
              .enterOrder(this.userId, data, this.datePipe.transform(this.today, 'yyyy-MM-dd'))
              .pipe()
              .subscribe(
                (result) => {
                  this.submittButtonTxt = 'Update Order'
                  this.toastr.success('Your Order has Successfully Placed');
                },
                (error) => {
                  this.toastr.error('Please Retry After Some Time');
                }
              )
          }
        }
      ]
    });

    await alert.present();
  }

  isDisable() {
    this.dailyRatesService.getLatestRates().pipe().subscribe(
      (response) => {
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


        if (hour < givenHour) {
          this.isDisableButton = false
        }
        else {
          if (hour == givenHour) {
            if (min <= givenMin) {
              this.isDisableButton = false
            }
            else {
              this.isDisableButton = true
            }
          }
          else {
            this.isDisableButton = true
          }
        }
      }
    )
  }

  getLastWeeksDate() {
    const now = new Date();
    let x = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    return this.datePipe.transform(x, 'yyyy-MM-dd')
  }

  getAllUsersDataByDate(date: any) {
    this.data$ = this.orderService.getOrdersListByDate(this.datePipe.transform(date, 'yyyy-MM-dd'))
    this.totalNoOfCages = this.data$.subscribe((result) => {
      this.totalNoOfCages = result.map((_) => _.ordeR_CAGES).reduce((acc, cur) => cur + acc, 0);
    })
  }
  onChange(event: Event): void {
    this.table.apiEvent({
      type: API.onGlobalSearch,
      value: (event.target as HTMLInputElement).value,
    });
  }

  ionRefresher(event?:any){
    if (this.userService.isVisibleForCustomers()){
      this.getOrdersData()
    }
    else{
      this.date = this.datePipe.transform(this.today, 'yyyy-MM-dd')
      this.getAllUsersDataByDate(this.date);
    }
    if (event)
      event.target.complete();
  }

}
