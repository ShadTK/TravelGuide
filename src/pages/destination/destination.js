var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service';
import { Login } from '../login/login';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CitiesBeaches } from '../cities-beaches/cities-beaches';
import { CitiesRomantic } from '../cities-romantic/cities-romantic';
import { CitiesParadise } from '../cities-paradise/cities-paradise';
var Destination = (function () {
    function Destination(navCtrl, navParams, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
    }
    Destination.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    Destination.prototype.selectCity = function () {
        switch (this.slides.getActiveIndex()) {
            case 1:
                this.navCtrl.push(CitiesBeaches);
                break;
            case 2:
                this.navCtrl.push(CitiesRomantic);
                break;
            case 3:
                this.navCtrl.push(CitiesParadise);
        }
    };
    Destination.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(Login);
    };
    ;
    return Destination;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], Destination.prototype, "slides", void 0);
Destination = __decorate([
    Component({
        selector: 'page-destination',
        templateUrl: 'destination.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AuthService,
        AlertController])
], Destination);
export { Destination };
//# sourceMappingURL=destination.js.map