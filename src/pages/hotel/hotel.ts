import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { Comments } from '../comments/comments'
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {

	PictureSelected: any;
	PictureList: {picture: string}[] = []
	HotelName: string;
	HotelPrice: any;
	HotelDescription: string;
	HotelService: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	    let hotel = "Live Aqua Cancun"   //this.navParams.get('hotel');
        switch(hotel){
            case "Hyatt Zilara Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        															];
                        this.HotelName = "Hyatt Zilara Cancun";
                        this.HotelPrice = "89";
                        this.HotelDescription = "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry";
                        this.PictureSelected = "photo_hotelcancun1_A.png"; 										
                        break;
            case "Moon Palace Golf":
                        this.PictureList = [{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        					{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        					{picture:'photo_hotelcancun2_A.png'},
                        					{picture:'photo_hotelcancun2_B.png'},
                        					];
                        
						this.HotelName = "Moon Palace Golf";
						this.HotelPrice = "119";
						this.HotelDescription = "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.";
						this.HotelService = "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                        									

                        this.PictureSelected = 'photo_hotelcancun2_A.png';
                        break;
            case "Live Aqua Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        					{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        					{picture:'photo_hotelcancun3_A.png'},
                        					{picture:'photo_hotelcancun3_B.png'},
                        					];
						this.HotelName = "Live Aqua Cancun",
						this.HotelPrice = "135";
						this.HotelDescription = "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.";
						this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
						this.PictureSelected = 'photo_hotelcancun3_A.png';

						break;

        }

      
	}

   comments(){
       this.navCtrl.push(Comments);
   }

	changeMainPicture(pictureName){
		this.PictureSelected = pictureName;
	}
        back(){
        this.navCtrl.pop();
    };

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
