import { Component } from '@angular/core';
import { NavController,NavParams} from 'ionic-angular';
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class Comments {
	
  private CommentTexts: {date:string, text:string}[] = [];

  constructor(public navCtrl: NavController) {
	let d = new Date();
  	this.CommentTexts.push({date:d.toDateString(), text:"Venham conferir, muito bom!"})
  	this.CommentTexts.push({date:d.toDateString(), text:"Encontrei um gato bravo em uma caixa, não gostei."})
  	console.log(this.CommentTexts);
  }

  onAddComment(value){
    let d = new Date ();
  	this.CommentTexts.push({date:d.toDateString(), text:JSON.stringify(value)});
  	console.log(this.CommentTexts);
  }
  
  back(){
    this.navCtrl.pop();
  };

}
