import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {
	private Comments: {date:string, text:string}[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

	var d = new Date();
  	this.Comments.push({date:d.toDateString(), text:"Venham conferir, muito bom!"})
  	this.Comments.push({date:d.toDateString(), text:"Encontrei um gato bravo em uma caixa, não gostei."})
  	//console.log(Comments);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }

	doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
