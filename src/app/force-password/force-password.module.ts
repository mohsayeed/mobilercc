import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcePasswordPageRoutingModule } from './force-password-routing.module';
import { ForcePasswordPage } from './force-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcePasswordPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ForcePasswordPage]
})
export class ForcePasswordPageModule {}
