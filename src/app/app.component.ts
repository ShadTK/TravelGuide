import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Destination } from '../pages/destination/destination'
import { HotelsList } from '../pages/hotels-list/hotels-list';
import { Cities } from '../pages/cities/cities';
import { Login } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Login;

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    });
  }
}

