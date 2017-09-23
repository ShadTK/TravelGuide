import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { HomePage } from '../home/home'
import { NavController,NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
})
export class Destination {

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  public authService: AuthService,
  			  public alertCtrl: AlertController) {
	    
	}
	    
    logout() {
        this.authService.logout();
        this.navCtrl.setRoot(HomePage);
    };	    
}

