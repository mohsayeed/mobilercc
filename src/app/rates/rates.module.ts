import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RatesPageRoutingModule } from './rates-routing.module';

import { RatesPage } from './rates.page';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatesPageRoutingModule,
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [RatesPage],
  exports: [RatesPage]

})
export class RatesPageModule {
  
}
