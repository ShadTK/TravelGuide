import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Chart } from 'chart.js'
import { Login } from '../login/login';
@Component({
  selector: 'page-hotels-list',
  templateUrl: 'hotels-list.html',
})
export class HotelsList {

	@ViewChild('barCanvas') barCanvas;

	barChart: any;
	citySelected: any = 'Cancun1';
	Hotels: {image:string, hotelName:string, pricing:string}[] = [];
	names: any ;

	goToHotelPage(hotelName){

		console.log(hotelName);
	}

	constructor(public navCtrl: NavController, public navParams: NavParams) {

        let city = this.navParams.get('city');
        switch(city){
            case "Noronha1":
                        this.Hotels = [{image:'../../assets/cel_hotelcancun1.png', hotelName:'Hyatt Zilara Cancun', pricing:'$89.00 per night'},
                                      {image:'../../assets/cel_hotelcancun2.png', hotelName:"Moon Palace Golf", pricing:"$119.00 per night"},
                                      {image:'../../assets/cel_hotelcancun3.png', hotelName:"Live Aqua Cancun", pricing:"$135.00 per night"}];
                        break;
            case "Noronha2":
                        this.Hotels = [{image:'../../assets/cel_hotelcancun1.png', hotelName:'Eon Paganini', pricing:'B100.000 per night'},
                                      {image:'../../assets/cel_hotelcancun2.png', hotelName:"Varuna Swift Death", pricing:"B500.000 per night"},
                                      {image:'../../assets/cel_hotelcancun3.png', hotelName:"Corvo the many faced", pricing:"B900.000 per night"}];
                        break;

        }
      
	}

    back(){
        this.navCtrl.pop();
    };

	ionViewDidLoad() {



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
                            beginAtZero:true
                        }
                    }]
                }
            }
 
        });

	console.log('ionViewDidLoad HotelsList');
	}

}
