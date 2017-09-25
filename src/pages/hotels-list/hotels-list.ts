import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-hotels-list',
  templateUrl: 'hotels-list.html',
})
export class HotelsList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelsList');
  }

}
