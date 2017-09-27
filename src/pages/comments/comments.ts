import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {
	private CommentTexts: {date:string, text:string}[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

	let d = new Date();
  	this.CommentTexts.push({date:d.toDateString(), text:"Venham conferir, muito bom!"})
  	this.CommentTexts.push({date:d.toDateString(), text:"Encontrei um gato bravo em uma caixa, não gostei."})
  	console.log(this.CommentTexts);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Comments');
  }


  onAddComment(value){
  	let d = new Date ();
  	//I'm sure there are better ways of pushing the value of the comments into the screen,
  	//bt stringify will suffice for now.
  	//Either way, and add comment should be going to a database so this would have
  	//to be changed on a backend.
  	this.CommentTexts.push({date:d.toDateString(), text:JSON.stringify(value)});
  	console.log(this.CommentTexts);
  }
}
