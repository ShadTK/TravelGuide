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
var Destination = (function () {
    function Destination(navCtrl, navParams, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
    }
    Destination.prototype.logout = function () {
        this.service.logout();
        this.nav.setRoot(HomePage);
    };
    Destination.prototype.getinfo = function () {
        var _this = this;
        this.service.getinfo().then(function (data) {
            if (data.success) {
                var alert = Alert.create({
                    title: data.success,
                    subTitle: data.msg,
                    buttons: ['ok']
                });
                _this.nav.present(alert);
            }
        });
    };
    return Destination;
}());
Destination = __decorate([
    Component({
        selector: 'page-destination',
        templateUrl: 'destination.html',
    }),
    __metadata("design:paramtypes", [Object, Object, AuthService])
], Destination);
export { Destination };
//# sourceMappingURL=destination.js.map