import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { Hotel } from '../hotel/hotel';


//Needed to lead the map
declare var google;

@Component({
  selector: 'page-hotels-map',
  templateUrl: 'hotels-map.html',
})

export class HotelsMap {

	//Declaring the map cariable and the reference element to it.
	@ViewChild('map') mapElement: ElementRef;
	
	map: any;
	citySelected: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.citySelected = this.navParams.get('city');
	}

	//Once view loads, shows the map and then add the Markers on it, depending on the city selected
	ionViewDidLoad() {
		switch(this.citySelected){
			case "Noronha1":
				this.loadMap(-3.854873, -32.430017);
				this.addMarker(-3.854, -32.432050,"Hotel da Palmeiras","$89.00");
				this.addMarker(-3.853, -32.431120,"Hotel Royal dusxiq","$119.00");
				this.addMarker(-3.852, -32.43,"O bom da cama","$135.00");
			break;

			case "Noronha2":
				this.loadMap(-3.864873, -32.440017);
				this.addMarker(-3.863, -32.442050,'Eon Paganini',"$100.00");
				this.addMarker(-3.865, -32.445120,"Varuna Hotel","$500.00");
				this.addMarker(-3.862, -32.442,"Parada do Corvo","$900.00");
			break;

			case "Paris1":
				this.loadMap(48.8597433,2.3534801);
				this.addMarker(48.858, 2.354,'Caroussel Hotel',"$100.00");
				this.addMarker(48.8597433, 2.352,"Canterlot Repouse","$500.00");
				this.addMarker(48.857, 2.353,"Lariatt for you","$900.00");
			break;

			case "Paris2":
				this.loadMap(48.8597433,2.3534801);
				this.addMarker(48.857, 2.364,'Centr Levo',"$150.00");
				this.addMarker(48.8587433, 2.355,"Caz vuola lon ge","$300.00");
				this.addMarker(48.855, 2.333,"Num Voltorme","$600.00");
			break;

			case "Cancun1":
				this.loadMap(21.158462,-86.8631867);
				this.addMarker(21.159462,-86.8631867,'Hyatt Zilara Cancun',"$89.00");
				this.addMarker(21.158,-86.862,"Moon Palace Golf","$119.00");
				this.addMarker(21.157,-86.869,"Live Aqua Cancun","$135.00");
			break;

			case "Cancun2":
				this.loadMap(21.158462,-86.8631867);
				this.addMarker(21.158462,-86.8631867,'Hyulle Zombone Cancun',"$98.00");
				this.addMarker(21.153,-86.86,"Sun Castle Tennis","$191.00");
				this.addMarker(21.155,-86.87,"Streaming Ice Cancun","$153.00");
			break;

		}
	}

	//load the map in the specified location

	loadMap(Latitude, Longitude){

		let latLng = new google.maps.LatLng(Latitude, Longitude);
		let mapOptions = {
			center: latLng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		}

		//Assigns map into map variable created all the way up there, and using the variables declared above

		this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);

	}

	//Adds the markers into the Maps

	addMarker(Latitude, Longitude, InfoContent, price){

		var markerImage = 'assets/pin_hotel.png';

		let marker = new google.maps.Marker({
			map:this.map,
			animation:google.maps.Animation.DROP,
			position:new google.maps.LatLng(Latitude, Longitude),
			icon: markerImage 
			});

		//Once marker is added, attatch an InfoWindow to it.

		this.addInfoWindow(marker, InfoContent, price);
		this.sendToHotel(marker, InfoContent);
	}

	addInfoWindow(marker, name, price){

		let infoWindow = new google.maps.InfoWindow({
			content: name + '<br>' + price + ' per night'
		});

		google.maps.event.addListener(marker, 'click', () => {
			infoWindow.open(this.map, marker);
		});

	}

	sendToHotel(marker, name){

	//User will be sent to hotel page upon double-tapping the marker

	google.maps.event.addListener(marker, 'dblclick', () => {
		this.navCtrl.push(Hotel, {hotel:name});
		console.log(name);
		});
	}

	back(){
        this.navCtrl.pop();
    };

}
