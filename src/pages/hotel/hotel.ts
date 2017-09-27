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
                        )                                                            
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
                        )
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
                        )                                         
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
                        )
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
                        )

                        break;
            //Paris1 Hotels

            case "Caroussel Hotel":
                        this.PictureList = [{picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                            {picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                            {picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                                                                    ];
                        this.HotelName = hotel;
                        this.HotelPrice = "100";
                        this.HotelDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry";
                        this.PictureSelected = "photo_hotelparis1_A.png";                                         
                        break;
            case "Canterlot Repouse":
                        this.PictureList = [{picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            {picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            {picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            ];
                        
                        this.HotelName = hotel;
                        this.HotelPrice = "500";
                        this.HotelDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
                        this.HotelService = "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                                                            

                        this.PictureSelected = 'photo_hotelparis2_A.png';
                        break;
            case "Lariatt for you":
                        this.PictureList = [{picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            {picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            {picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            ];
                        this.HotelName = hotel,
                        this.HotelPrice = "900";
                        this.HotelDescription = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                        this.PictureSelected = 'photo_hotelparis3_A.png';

                        break;

            //Paris2 Hotels

            case "Centr Levo":
                        this.PictureList = [{picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                            {picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                            {picture:'photo_hotelparis1_A.png'},
                                            {picture:'photo_hotelparis1_B.png'},
                                                                                    ];
                        this.HotelName = hotel;
                        this.HotelPrice = "150";
                        this.HotelDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry";
                        this.PictureSelected = "photo_hotelparis1_A.png";                                         
                        break;
            case "Caz vuola lon ge":
                        this.PictureList = [{picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            {picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            {picture:'photo_hotelparis2_A.png'},
                                            {picture:'photo_hotelparis2_B.png'},
                                            ];
                        
                        this.HotelName = hotel;
                        this.HotelPrice = "300";
                        this.HotelDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
                        this.HotelService = "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                                                            

                        this.PictureSelected = 'photo_hotelparis2_A.png';
                        break;
            case "Num Voltorme":
                        this.PictureList = [{picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            {picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            {picture:'photo_hotelparis3_A.png'},
                                            {picture:'photo_hotelparis3_B.png'},
                                            ];
                        this.HotelName = hotel,
                        this.HotelPrice = "600";
                        this.HotelDescription = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                        this.PictureSelected = 'photo_hotelparis3_A.png';

                        break;

            //Cancun1 Hotels
            
            case "Hyatt Zilara Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        					{picture:'photo_hotelcancun1_A.png'},
                        					{picture:'photo_hotelcancun1_B.png'},
                        															];
                        this.HotelName = hotel;
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
                        
						this.HotelName = hotel;
						this.HotelPrice = "119";
						this.HotelDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
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
						this.HotelName = hotel,
						this.HotelPrice = "135";
						this.HotelDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
						this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
						this.PictureSelected = 'photo_hotelcancun3_A.png';
						break;

            //Cancun2 Hotels

            case "Hyulle Zombone Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun1_A.png'},
                                            {picture:'photo_hotelcancun1_B.png'},
                                            {picture:'photo_hotelcancun1_A.png'},
                                            {picture:'photo_hotelcancun1_B.png'},
                                            {picture:'photo_hotelcancun1_A.png'},
                                            {picture:'photo_hotelcancun1_B.png'},
                                                                                    ];
                        this.HotelName = hotel;
                        this.HotelPrice = "98";
                        this.HotelDescription = "Prominently located on the widest stretch of beach in the heart of Cancun's Hotel Zone, Hyulle Zombone Cancun is an adults-only, all-suite, all inclusive resort where guests experience traditional Mexican warmth in an intimate yet casual setting.";
                        this.HotelService = "Room Service | Free Parking | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry";
                        this.PictureSelected = "photo_hotelcancun1_A.png";                                         
                        break;
            case "Sun Castle Tennis":
                        this.PictureList = [{picture:'photo_hotelcancun2_A.png'},
                                            {picture:'photo_hotelcancun2_B.png'},
                                            {picture:'photo_hotelcancun2_A.png'},
                                            {picture:'photo_hotelcancun2_B.png'},
                                            {picture:'photo_hotelcancun2_A.png'},
                                            {picture:'photo_hotelcancun2_B.png'},
                                            ];
                        
                        this.HotelName = hotel;
                        this.HotelPrice = "191";
                        this.HotelDescription ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."; 
                        this.HotelService = "Room Service | Free Breakfast | Dry Cleaning | Meeting Rooms | Laundry" ;
                        this.PictureSelected = 'photo_hotelcancun2_A.png';
                        break;
            case "Streaming Ice Cancun":
                        this.PictureList = [{picture:'photo_hotelcancun3_A.png'},
                                            {picture:'photo_hotelcancun3_B.png'},
                                            {picture:'photo_hotelcancun3_A.png'},
                                            {picture:'photo_hotelcancun3_B.png'},
                                            {picture:'photo_hotelcancun3_A.png'},
                                            {picture:'photo_hotelcancun3_B.png'},
                                            ];
                        this.HotelName = hotel,
                        this.HotelPrice = "153";
                        this.HotelDescription = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";
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
