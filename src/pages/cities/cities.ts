import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HotelsList } from '../hotels-list//hotels-list';

//I'll admit, i'm not particularly proud of this page, however i couldn't find the time to properly refactor it.
//On the other had, at least I didn't have to make 3 separate pages to do this.

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class Cities {

        Destinations

//The below fix a glitch with sliders resizing.
//For more information: https://github.com/ionic-team/ionic/issues/10101

  @ViewChild(Slides) slides: Slides;
  
  public ionViewWillEnter() {
    this.slides.update();
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.Destinations = this.navParams.get('destination');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesBeaches');
  }

ionSlideDidChange(){
  console.log(this.slides.getActiveIndex())
}

  back() {
  	this.navCtrl.pop();
  }

    selectCity(){

// Due to a glitch on the slider loop, the active index number may be different then the actual slide. Case 3 occurs when you get to the first slide in the first loop. case 0 Occurs when you go back to the last slide after the first loop.
    switch(this.Destinations){
    	case "Beaches":
    	   switch(this.slides.getActiveIndex()) {
    			case 0:
    			    this.navCtrl.push(HotelsList, {city: 'Noronha2'});
    			    break;
    			case 1:
    			    this.navCtrl.push(HotelsList, {city: 'Noronha1'});
    			    break;
    			case 2:
    			    this.navCtrl.push(HotelsList, {city: 'Noronha2'});
    			    break;
    			case 3:
    			    this.navCtrl.push(HotelsList, {city: 'Noronha1'});
    			    break;
		    }
		    break;
		case "Romantic":
			switch(this.slides.getActiveIndex()) {
    			case 0:
    			    this.navCtrl.push(HotelsList, {city: 'Paris2'});
    			    break;
    			case 1:
    			    this.navCtrl.push(HotelsList, {city: 'Paris1'});
    			    break;
    			case 2:
    			    this.navCtrl.push(HotelsList, {city: 'Paris2'});
    			    break;
    			case 3:
    			    this.navCtrl.push(HotelsList, {city: 'Paris2'});
    			    break;
		    }
		    break;
		case "Paradise":
			switch(this.slides.getActiveIndex()) {
    			case 0:
    			    this.navCtrl.push(HotelsList, {city: 'Cancun2'});
    			    break;
    			case 1:
    			    this.navCtrl.push(HotelsList, {city: 'Cancun1'});
    			    break;
    			case 2:
    			    this.navCtrl.push(HotelsList, {city: 'Cancun2'});
    			    break;
    			case 3:
    			    this.navCtrl.push(HotelsList, {city: 'Cancun1'});
    			    break;
		    }
		    break;
		}
	}

}
