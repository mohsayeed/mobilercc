import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForcePasswordPage } from './force-password.page';

const routes: Routes = [
  {
    path: '',
    component: ForcePasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcePasswordPageRoutingModule {}
