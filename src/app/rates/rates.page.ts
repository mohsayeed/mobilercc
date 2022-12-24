import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IonModal } from '@ionic/angular';
import { ToastrService } from 'ngx-toastr';
import { DailyratesService } from '../services/dailyrates.service';
import { UserService } from '../services/users/user.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { OrdersService } from '../services/orders/orders.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.page.html',
  styleUrls: ['./rates.page.scss'],
  providers: [DatePipe]
})
export class RatesPage implements OnInit {
  @Input() update: boolean;
  @ViewChild(IonModal) modal: IonModal;
  noOfCages: any = null;
  ngOnChanges() {
    this.ionRefresher()
  }


  constructor(private dailyRatesService: DailyratesService,
    public userService: UserService,
    public formBuilder: FormBuilder,
    private toastr: ToastrService,
    private orderService: OrdersService,
    private datePipe: DatePipe) { }
  orders: any = {
    "dailyDate": "2022-07-21T00:00:00",
    "liveRate": 200,
    "skinlessRate": 200,
    "withSkinRate": 200,
    "cutOffTime": "000"
  }
  cutoffTimeToShownToCustomer:any;
  today = new Date()
  date : any;
  currentSelectedUser: any = null;
  userNames: any;
  ngOnInit() {
    this.getDailyRates();
    if(this.userService.isVisibleForCustomers){
      {
        this.ionicForm = this.formBuilder.group({
          wholesaleRate: [null],
          normalChicken: [null],
          skinlessChicken: [null],
          cutOffTime: [null]
        })
        this.getAllUserNamesAndIds()
        this.addCagesForCustomer = this.formBuilder.group({
          username: [null]
        })
      }
    }
   

  }
  getAllUserNamesAndIds() {
    this.userService.getAllUserNamesIds().
      pipe().
      subscribe(
        (result) => {
          result.sort((a, b) => 0 - (a.userName > b.userName ? -1 : 1));
          this.userNames = result
        },
        (error) => {

        }
      )
  }

  getDailyRates(event?: any) {
    console.log('daily rates is called')
    this.dailyRatesService
      .getLatestRates()
      .pipe()
      .subscribe(
        (result) => {
          this.orders = result
          this.cutoffTimeToShownToCustomer = this.toTime(result.cutOffTime)
          this.dailyRatesService._dailyRatesInfo$.next(result)
          this.ionicForm.patchValue({
            wholesaleRate: this.orders.liveRate,
            normalChicken: this.orders.withSkinRate,
            skinlessChicken: this.orders.skinlessRate,
            cutOffTime: this.orders.cutOffTime
          });
          if (event)
            event.target.complete();
        },
        (error) => {
          if (event)
            event.target.complete();
        }
      );
  }
  ionicForm: FormGroup;
  addCagesForCustomer: FormGroup
  isSubmittedaddCages = false;
  isSubmittedIonicForm = false;

  get errorControl() {
    return this.ionicForm.controls;
  }
  submitForm() {
    this.isSubmittedIonicForm = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      let latest_rates = {
        "dailyRateId": 0,
        "dailyDate": new Date(),
        "liveRate": this.ionicForm.value.wholesaleRate,
        "withSkinRate": this.ionicForm.value.normalChicken,
        "skinlessRate": this.ionicForm.value.skinlessChicken,
        "cutOffTime": this.ionicForm.value.cutOffTime,
        "updatedBy": 1,
        "updatedDt": new Date(),
      }
      this.dailyRatesService.updateLatestRates(latest_rates)


      this.dailyRatesService.updateLatestRates(latest_rates)
        .pipe()
        .subscribe(
          (result) => {
            this.toastr.success('Rates Updated Successfully');
            this.orders = latest_rates
          },
          (error) => {
            this.toastr.error('Please Retry After Some Time');
          }
        )
    }
  }
  submitFormaddCages() {
    this.isSubmittedaddCages = true;
    if (!this.addCagesForCustomer.valid) {
      return false;
    } else {

    }
  }
  customerChange(event?: any) {
    console.log(event)
    this.currentSelectedUser = (event.value)
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.noOfCages, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if(ev.detail.role==='cancel'){
      this.addCagesForCustomer.patchValue({
        username: null
      });
      this.currentSelectedUser=null
    }
    if (ev.detail.role === 'confirm') {
      let data =
      {
        "orderId": 0,
        "userId": this.currentSelectedUser.userId,
        "orderDate": this.datePipe.transform(this.today, 'yyyy-MM-dd'),
        "orderCages": ev.detail.data,
        "updatedBy": 1,
        "updatedDt": this.today
      }

      this.orderService
        .enterOrder(this.currentSelectedUser.userId, data, this.datePipe.transform(this.today, 'yyyy-MM-dd'))
        .pipe()
        .subscribe(
          (result) => {
            this.toastr.success('Your Order has Successfully Placed');
            this.addCagesForCustomer.patchValue({
              username: null
            });
            this.currentSelectedUser=null
            this.noOfCages = null
          },
          (error) => {
            this.toastr.error('Please Retry After Some Time');
          }
        )
    }
  }
  ionRefresher(event?: any){
    this.getDailyRates();
    if (!this.userService.isVisibleForCustomers()) {
      this.getAllUserNamesAndIds()
    }
  }
  toTime(timeString) {
    var timeTokens = timeString.split(':');
    return new Date(1970, 0, 1, timeTokens[0], timeTokens[1], timeTokens[2]);
  }
}
