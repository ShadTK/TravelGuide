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
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Destination } from '../destination/destination';
var Login = (function () {
    function Login(navCtrl, authservice, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.alertCtrl = alertCtrl;
        //The below stores username and password information for checking.
        this.usercreds = {
            name: '',
            password: '',
        };
    }
    //The below function match the username and password provided with the users available on the database.
    //If a match is found, the login is performed.
    //If not, a popup message informs that user and password are incorrect.
    Login.prototype.login = function (user) {
        if (this.authservice.authenticate(user)) {
            this.navCtrl.setRoot(Destination);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Login Failed',
                subTitle: 'Username or Password Incorrect',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        ;
    };
    return Login;
}());
Login = __decorate([
    Component({
        selector: 'page-login',
        templateUrl: 'login.html'
    }),
    __metadata("design:paramtypes", [NavController, AuthService, AlertController])
], Login);
export { Login };
//# sourceMappingURL=login.js.map