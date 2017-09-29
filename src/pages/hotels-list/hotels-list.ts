import { Component, ViewChild } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Chart } from 'chart.js'
import { Login } from '../login/login';
import { HotelsMap } from '../hotels-map/hotels-map' 
import { Hotel } from '../hotel/hotel'

@Component({
  selector: 'page-hotels-list',
  templateUrl: 'hotels-list.html',
})
export class HotelsList {

	@ViewChild('barCanvas') barCanvas;

	barChart: any;
	citySelected: any;
	Hotels: {image:string, hotelName:string, pricing:string}[] = [];
	names: any ;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

        //The below will pass the parameters to generate the page according to what city was selected previously

        this.citySelected = this.navParams.get('city');
        switch(this.citySelected){
            case "Noronha1":
                        this.Hotels = [{image:'cel_fernandodenoronha1.png', hotelName:'Hotel da Palmeiras', pricing:'$89.00 per night'},
                                      {image:'cel_fernandodenoronha2.png', hotelName:"Hotel Royal dusxiq", pricing:"$119.00 per night"},
                                      {image:'cel_fernandodenoronha3.png', hotelName:"O bom da cama", pricing:"$135.00 per night"}];
                        break;
            case "Noronha2":
                        this.Hotels = [{image:'cel_fernandodenoronha1.png', hotelName:'Eon Paganini', pricing:'$100.00 per night'},
                                      {image:'cel_fernandodenoronha2.png', hotelName:"Varuna Hotel", pricing:"$500.00 per night"},
                                      {image:'cel_fernandodenoronha3.png', hotelName:"Parada do Corvo", pricing:"$900.00 per night"}];
                        break;                    
            case "Paris1":
                        this.Hotels = [{image:'cel_hotelparis1.png', hotelName:'Caroussel Hotel', pricing:'$100.00 per night'},
                                      {image:'cel_hotelparis2.png', hotelName:"Canterlot Repouse", pricing:"$500.00 per night"},
                                      {image:'cel_hotelparis3.png', hotelName:"Lariatt for you", pricing:"$900.00 per night"}];
                        break;
            case "Paris2":
                        this.Hotels = [{image:'cel_hotelparis1.png', hotelName:'Centr Levo', pricing:'$150.00 per night'},
                                      {image:'cel_hotelparis2.png', hotelName:"Caz vuola lon ge", pricing:"$300.00 per night"},
                                      {image:'cel_hotelparis3.png', hotelName:"Num Voltorme", pricing:"$600.000 per night"}];
                        break;
            case "Cancun1":
                        this.Hotels = [{image:'cel_hotelcancun1.png', hotelName:'Hyatt Zilara Cancun', pricing:'$89.00 per night'},
                                      {image:'cel_hotelcancun2.png', hotelName:"Moon Palace Golf", pricing:"$119.00 per night"},
                                      {image:'cel_hotelcancun3.png', hotelName:"Live Aqua Cancun", pricing:"$135.00 per night"}];
                        break;     
            case "Cancun2":  
                        this.Hotels = [{image:'cel_hotelcancun1.png', hotelName:'Hyulle Zombone Cancun', pricing:'$98.00 per night'},
                                      {image:'cel_hotelcancun2.png', hotelName:"Sun Castle Tennis", pricing:"$191.00 per night"},
                                      {image:'cel_hotelcancun3.png', hotelName:"Streaming Ice Cancun", pricing:"$153.00 per night"}];
                        break;  
        }      
	}

	ionViewDidLoad() {


    //Loads the price chart with requested parameters

		this.barChart = new Chart(this.barCanvas.nativeElement, {
 
            type: 'bar',
            data: {
                labels: ["19/07","20/07","21/07","22/07","23/07"],
                datasets: [{
                    label: this.citySelected + ' Hotels Price Variation',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(0, 32, 73, 1)',
                        'rgba(0, 32, 73, 1)',
                        'rgba(0, 32, 73, 1)',
                        'rgba(0, 32, 73, 1)',
                        'rgba(0, 32, 73, 1)',
                    ],
                    borderWidth: 1
                }]
            },

 
        });

  	console.log('ionViewDidLoad HotelsList');
  }

  back(){
      this.navCtrl.pop();
  };

  maps(){
      this.navCtrl.push(HotelsMap, {city:this.citySelected});
  };

  goToHotelPage(hotelName){
      this.navCtrl.push(Hotel, {hotel: hotelName});
      console.log(hotelName);
  }
}
