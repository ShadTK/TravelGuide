var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
var HotelsList = (function () {
    function HotelsList(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.citySelected = 'Cancun1';
        this.Hotels = [];
    }
    HotelsList.prototype.goToHotelPage = function (hotelName) {
        this.navCtrl.setRoot(Login);
    };
    HotelsList.prototype.ionViewDidLoad = function () {
        this.barChart = new Chart(this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                        label: 'CANCUN HOTELS PRICE VARIATION',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
        console.log('ionViewDidLoad HotelsList');
    };
    return HotelsList;
}());
__decorate([
    ViewChild('barCanvas'),
    __metadata("design:type", Object)
], HotelsList.prototype, "barCanvas", void 0);
HotelsList = __decorate([
    Component({
        selector: 'page-hotels-list',
        templateUrl: 'hotels-list.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], HotelsList);
export { HotelsList };
//# sourceMappingURL=hotels-list.js.map