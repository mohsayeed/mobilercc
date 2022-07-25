import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NgxUiLoaderConfig, NgxUiLoaderHttpModule, NgxUiLoaderModule, NgxUiLoaderRouterModule, SPINNER } from 'ngx-ui-loader';
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
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule, 
    HttpClientModule,NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),NgxUiLoaderRouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
