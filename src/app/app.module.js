var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { Destination } from '../pages/destination/destination';
import { AuthService } from '../providers/auth-service';
import { CitiesBeaches } from '../pages/cities-beaches/cities-beaches';
import { CitiesRomantic } from '../pages/cities-romantic/cities-romantic';
import { CitiesParadise } from '../pages/cities-paradise/cities-paradise';
import { HotelsList } from '../pages/hotels-list/hotels-list';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            MyApp,
            Login,
            Destination,
            CitiesBeaches,
            CitiesRomantic,
            CitiesParadise,
            HotelsList
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
            CitiesBeaches,
            CitiesRomantic,
            CitiesParadise,
            HotelsList,
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            AuthService
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map