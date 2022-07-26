import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
today = new Date()
handlerMessage = '';
roleMessage = '';
  constructor(private alertController: AlertController) { }
  orders = 10
  ngOnInit() {
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
            console.log('hi')
           }
        }
      ]
    });

    await alert.present();
  }

}
