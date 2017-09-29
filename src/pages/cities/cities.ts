import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HotelsList } from '../hotels-list//hotels-list';

@Component({
  selector: 'page-cities',
  templateUrl: 'cities.html',
})
export class Cities {

  Destinations: any ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.Destinations = this.navParams.get('destination');
  }

  //The below fix a glitch with sliders resizing.
  //For more information: https://github.com/ionic-team/ionic/issues/10101

  @ViewChild(Slides) slides: Slides;
  
  public ionViewWillEnter() {
    this.slides.update();
  }

  selectCity(){

  // Due to a glitch on the slider loop, the active index number may be different then the actual slide. 
  // Case 3 occurs when you get to the first slide in the first loop. 
  // Case 0 occurs when you go back to the last slide after the first loop.

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

  back() {
    this.navCtrl.pop();
  }

}
