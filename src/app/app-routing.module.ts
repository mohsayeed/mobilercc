import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./rates/rates.module').then((m) => m.RatesPageModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'force-password',
    loadChildren: () =>
      import('./force-password/force-password.module').then(
        (m) => m.ForcePasswordPageModule
      ),
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./force-password/force-password.module').then(
  //       (m) => m.ForcePasswordPageModule
  //     ),
  // },
  {
    path: 'confirm-password',
    loadChildren: () => import('./confirm-password/confirm-password.module').then( m => m.ConfirmPasswordPageModule)
  },  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
