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

  	    let hotel = this.navParams.get('hotel');
        console.log(hotel);
        switch(hotel){


            //Noronha1 Hotels

            case "Hotel da Palmeiras":
                this.populateVariables(
                        "photo_hotelfernando1_A.png", 
                        "photo_hotelfernando1_B.png",
                        hotel,
                        "89",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry", 
                        "photo_hotelfernando1_A.png");                          
                        break;
            case "Hotel Royal dusxiq":
                this.populateVariables(
                        "photo_hotelfernando2_A.png",
                        "photo_hotelfernando2_B.png",
                        hotel,
                        "119",
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelfernando2_A.png",
                        );                                                      
                        break;
            case "O bom da cama":
                this.populateVariables(
                        "photo_hotelfernando3_A.png",
                        "photo_hotelfernando3_B.png",
                        hotel,
                         "135",
                         "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                         "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                         'photo_hotelfernando3_A.png',
                        );
                        break;

            //Noronha2 Hotels

            case "Eon Paganini":
                this.populateVariables(
                        'photo_hotelfernando1_A.png',
                        'photo_hotelfernando1_B.png',                      
                        hotel,
                        "100",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelfernando1_A.png",
                        );                                         
                        break;
            case "Varuna Hotel":
                this.populateVariables(
                        "photo_hotelfernando2_A.png",
                        "photo_hotelfernando2_B.png",
                        hotel,
                        "500",
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelfernando2_A.png',
                        );
                        break;
            case "Parada do Corvo":
                this.populateVariables(
                        "photo_hotelfernando3_B.png",
                        "photo_hotelfernando3_A.png",
                        hotel,
                        "900",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelfernando3_A.png',
                        );

                        break;
            //Paris1 Hotels

            case "Caroussel Hotel":
                this.populateVariables(                         
                        "photo_hotelparis1_A.png",
                        "photo_hotelparis1_B.png",                                                                                    
                        hotel,
                        "100",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelparis1_A.png",
                        );                                     
                        break;
            case "Canterlot Repouse":
                this.populateVariables(
                        "photo_hotelparis2_A.png",
                        "photo_hotelparis2_B.png",
                         hotel,
                        "500",
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        "photo_hotelparis2_A.png",
                        );              

                        this.PictureSelected = 'photo_hotelparis2_A.png';
                        break;
            case "Lariatt for you":
                this.populateVariables(
                        "photo_hotelparis3_A.png",
                        "photo_hotelparis3_B.png",                                            
                        hotel,
                        "900",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelparis3_A.png',
                        );
                        break;

            //Paris2 Hotels

            case "Centr Levo":
                this.populateVariables(
                        "photo_hotelparis1_A.png",
                        "photo_hotelparis1_B.png",
                        hotel,
                        "150",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelparis1_A.png",
                        );                                        
                        break;
            case "Caz vuola lon ge":
                this.populateVariables(
                        "photo_hotelparis2_A.png",
                        "photo_hotelparis2_B.png",
                        hotel,
                        "300",
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        "photo_hotelparis2_A.png",
                        );              

                        this.PictureSelected = 'photo_hotelparis2_A.png';
                        break;
            case "Num Voltorme":
                this.populateVariables( 
                        "photo_hotelparis3_A.png",
                        "photo_hotelparis3_B.png",                                           
                        hotel,
                        "600",
                        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelparis3_A.png',
                        );
                        break;

            //Cancun1 Hotels
            
            case "Hyatt Zilara Cancun":
            this.populateVariables(
                        "photo_hotelcancun1_A.png",
                        "photo_hotelcancun1_B.png",                        															
                         hotel,
                        "89",
                        "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyatt Zilara Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelcancun1_A.png",
                        );
                        break;
            case "Moon Palace Golf":
            this.populateVariables(
                        "photo_hotelcancun2_A.png",
                        "photo_hotelcancun2_B.png",                     
						hotel,
						"119",
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
						"Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        this.PictureSelected = 'photo_hotelcancun2_A.png'
                        );
                        break;
            case "Live Aqua Cancun":
                        this.populateVariables(
                        "photo_hotelcancun3_A.png",
                        "photo_hotelcancun3_B.png",
						 hotel,
						"135",
						"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
						"Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
						'photo_hotelcancun3_A.png'
                        );
						break;

            //Cancun2 Hotels

            case "Hyulle Zombone Cancun":
                        this.populateVariables(
                        "photo_hotelcancun1_A.png",
                        "photo_hotelcancun1_B.png",
                        hotel,
                        "98",
                        "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyulle Zombone Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry",
                        "photo_hotelcancun1_A.png",
                        );
                        break;
            case "Sun Castle Tennis":
                        this.populateVariables(
                        "photo_hotelcancun2_A.png",
                        "photo_hotelcancun2_B.png",                        
                        hotel,
                        "191",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelcancun2_A.png',
                        );
                        break;
            case "Streaming Ice Cancun":
                        this.populateVariables(
                        "photo_hotelcancun3_A.png",
                        "photo_hotelcancun3_B.png",
                        hotel,
                        "153",
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                        "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ,
                        'photo_hotelcancun3_A.png',
                        );
                        break;
        }

      
	}


    populateVariables(
        picture1: string,
        picture2:string,
        hotel:string, 
        hotelPrice:string, 
        hotelDescription:string,
        hotelService:string,
        pictureSelected:string
        )
    {

            this.PictureList = [{picture:picture1},
                                {picture:picture2},
                                {picture:picture1},
                                {picture:picture2},
                                {picture:picture1},
                                {picture:picture2},
                               ];
            this.HotelName = hotel;
            this.HotelPrice = hotelPrice;
            this.HotelDescription = hotelDescription;
            this.HotelService = hotelService;
            this.PictureSelected = pictureSelected;      

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
