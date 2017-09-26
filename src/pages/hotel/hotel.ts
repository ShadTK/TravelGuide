import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
@Component({
  selector: 'page-hotel',
  templateUrl: 'hotel.html',
})
export class Hotel {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Hotel');
  }

}
