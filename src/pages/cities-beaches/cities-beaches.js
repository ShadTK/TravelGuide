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
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
var CitiesBeaches = (function () {
    function CitiesBeaches(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CitiesBeaches.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CitiesBeaches');
    };
    CitiesBeaches.prototype.back = function () {
        this.navCtrl.pop();
    };
    CitiesBeaches.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    return CitiesBeaches;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], CitiesBeaches.prototype, "slides", void 0);
CitiesBeaches = __decorate([
    Component({
        selector: 'page-cities-beaches',
        templateUrl: 'cities-beaches.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], CitiesBeaches);
export { CitiesBeaches };
//# sourceMappingURL=cities-beaches.js.map