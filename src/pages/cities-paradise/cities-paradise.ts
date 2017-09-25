import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-cities-paradise',
  templateUrl: 'cities-paradise.html',
})
export class CitiesParadise {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CitiesParadise');
  }

  back() {
  	this.navCtrl.pop();
  }
//The below fix a glitch with sliders resizing.
//For more information: https://github.com/ionic-team/ionic/issues/10101
  @ViewChild(Slides) slides: Slides;
  
  public ionViewWillEnter() {
    this.slides.update();
}
}
