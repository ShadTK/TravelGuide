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
var CitiesRomantic = (function () {
    function CitiesRomantic(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CitiesRomantic.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CitiesRomantic');
    };
    CitiesRomantic.prototype.back = function () {
        this.navCtrl.pop();
    };
    CitiesRomantic.prototype.ionViewWillEnter = function () {
        this.slides.update();
    };
    return CitiesRomantic;
}());
__decorate([
    ViewChild(Slides),
    __metadata("design:type", Slides)
], CitiesRomantic.prototype, "slides", void 0);
CitiesRomantic = __decorate([
    Component({
        selector: 'page-cities-romantic',
        templateUrl: 'cities-romantic.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], CitiesRomantic);
export { CitiesRomantic };
//# sourceMappingURL=cities-romantic.js.map