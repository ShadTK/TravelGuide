import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { Login } from '../login/login'
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
        this.navCtrl.setRoot(Login);
    };	    
}

