import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Destination } from '../pages/destination/destination';
import { AuthService } from '../providers/auth-service';
import { HotelsList } from '../pages/hotels-list/hotels-list';
import { Cities } from '../pages/cities/cities';
import { Hotel } from '../pages/hotel/hotel';

@NgModule({
  declarations: [
    MyApp,
    Login,
    Destination,
    HotelsList,
    Cities,
    Hotel,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Destination,
    HotelsList,
    Cities,
    Hotel,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
