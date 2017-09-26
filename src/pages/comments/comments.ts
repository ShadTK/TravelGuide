import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }

}
