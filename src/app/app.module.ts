import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
  SPINNER,
} from 'ngx-ui-loader';
import { OrdersService } from './services/orders/orders.service';
import { AuthGuardGuard } from './core/auth/auth-guard.guard';
import { LoginGuard } from './core/auth/login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from './services/users/user.service';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import {File} from '@ionic-native/file/ngx'
import {FileOpener} from '@ionic-native/file-opener/ngx'

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: 'red',
  bgsType: SPINNER.threeStrings,
  blur: 25,
  fastFadeOut: true,
  fgsColor: 'red',
  fgsType: SPINNER.threeBounce,
  pbColor: 'red',
  pbThickness: 5,
  hasProgressBar: true,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    OrdersService,
    AuthGuardGuard,
    LoginGuard,
    UserService,
    PDFGenerator,
    File,
    FileOpener
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
