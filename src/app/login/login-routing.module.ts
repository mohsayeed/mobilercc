import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForcePasswordPage } from '../force-password/force-password.page';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
  // {
  //   path: '',
  //   component: ForcePasswordPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
