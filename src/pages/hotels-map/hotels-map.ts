import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-hotels-map',
  templateUrl: 'hotels-map.html',
})
export class HotelsMap {


	@ViewChild('map') mapElement: ElementRef;
	map: any;




  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
    this.addMarker();
  }

  loadMap(){

  	let latLng = new google.maps.LatLng(-34.9290, 138.6010);
  	let mapOptions = {
  		center: latLng,
  		zoom: 15,
  		mapTypeId: google.maps.MapTypeId.ROADMAP,
  	}

  	this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);



  }

  addMarker(){

  	var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  	var markerImage = '../../assets/pin_hotel.png';
  	let marker = new google.maps.Marker({
  		map:this.map,
  		animation:google.maps.Animation.DROP,
  		position:this.map.getCenter(),
  		icon: markerImage 
  	});

  	this.addInfoWindow(marker, "NO WAY? NO WAY! NO WAY? NO WAY!");
  }

  addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
}
