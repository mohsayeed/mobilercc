import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/auth/auth-guard.guard';
import { ForcePasswordGuard } from './core/auth/force-password.guard';
import { LoginGuard } from './core/auth/login.guard';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'rates',
    loadChildren: () =>
      import('./rates/rates.module').then((m) => m.RatesPageModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path: '',
    redirectTo:'tabs',
    pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
      canActivate:[LoginGuard]
  },
  {
    path: 'force-password',
    loadChildren: () =>
      import('./force-password/force-password.module').then(
        (m) => m.ForcePasswordPageModule
      ),
    canActivate:[ForcePasswordGuard]
  },
  {
    path: 'confirm-password',
    loadChildren: () => import('./confirm-password/confirm-password.module').then( m => m.ConfirmPasswordPageModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule),
    canActivate:[AuthGuardGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
