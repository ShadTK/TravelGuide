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

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	//Once view loads, shows the map and then add the Markers on it
	ionViewDidLoad() {
		this.loadMap();
		this.addMarker(-34.9290,138.6000,"NO WAY? NO WAY!","$89.00");
		this.addMarker(-34.9280,138.6050,"Its a good day to die","$119.00");
	}

	//load the map in the specified location
	loadMap(){

		let latLng = new google.maps.LatLng(-34.9290, 138.6010);
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

		var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		var markerImage = '../../assets/pin_hotel.png';

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

		//Send user to hotel page
	sendToHotel(marker, name){

	google.maps.event.addListener(marker, 'dblclick', () => {
		this.navCtrl.push(Hotel, name);
		console.log(name);
	});
	}

}
