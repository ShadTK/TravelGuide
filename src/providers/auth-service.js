var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var AuthService = (function () {
    function AuthService() {
        this.isLoggedin = false;
    }
    AuthService.prototype.LoggedIn = function () {
        this.isLoggedin = true;
    };
    AuthService.prototype.destroyUserCredentials = function () {
        this.isLoggedin = false;
    };
    AuthService.prototype.authenticate = function (user) {
        if (user.name == "ibm" && user.password == "123456")
            return true;
        else
            return false;
    };
    AuthService.prototype.logout = function () {
        this.destroyUserCredentials();
    };
    return AuthService;
}());
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth-service.js.map