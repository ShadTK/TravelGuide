import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {

	PictureSelected: any;
	PictureList: {picture: string}[] = []
	HotelInformation: {name: string, price: string, description: string, services:string}[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	    let hotel = "Moon Palace Golf"   //this.navParams.get('hotel');
        switch(hotel){
            case "Hyatt Zilara Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        															];
                        this.HotelInformation = [{name:"Hyatt Zilara Cancun", 
                        						  price:"89", 
                        						  description:"Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.",
                        						  services:"Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" }
                        															];
                        break;
            case "Moon Palace Golf":
                        this.PictureList = [{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        					{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        					{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        															];
                        this.HotelInformation = [{name:"Moon Palace Golf", 
                        						  price:"119", 
                        						  description:"Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.",
                        						  services:"Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" }
                        															];
                        this.PictureSelected = 'photo_hotelcancun3_A.png';
                        break;
            case "Live Aqua Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        					{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        					{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        															];
                        this.HotelInformation = [{name:"Live Aqua Cancun", 
                        						  price:"135", 
                        						  description:"Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.",
                        						  services:"Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" }
                        															];
                        break;

        }
      
	}

	changeMainPicture(pictureName){
		this.PictureSelected = pictureName;
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
