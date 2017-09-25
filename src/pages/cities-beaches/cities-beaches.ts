import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { HotelsList } from '../hotels-list//hotels-list';

@Component({
  selector: 'page-cities-beaches',
  templateUrl: 'cities-beaches.html',
})
export class CitiesBeaches {
  //The below fix a glitch with sliders resizing.
//For more information: https://github.com/ionic-team/ionic/issues/10101
  @ViewChild(Slides) slides: Slides;
  
  public ionViewWillEnter() {
    this.slides.update();
}



  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
}