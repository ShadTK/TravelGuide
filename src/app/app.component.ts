import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Destination } from '../pages/destination/destination'
import { CitiesBeaches } from '../pages/cities-beaches/cities-beaches';
import { HotelsList } from '../pages/hotels-list/hotels-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = CitiesBeaches;

constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  platform.ready().then(() => {
    statusBar.styleDefault();
    splashScreen.hide();
    });
  }
}

