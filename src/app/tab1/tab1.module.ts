import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { RatesPageModule } from '../rates/rates.module';
import { OrderPageModule } from '../order/order.module';
import { HeaderPageModule } from '../header/header.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    RatesPageModule,
    OrderPageModule,
    HeaderPageModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
