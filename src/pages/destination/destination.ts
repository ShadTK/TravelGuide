import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { Login } from '../login/login'
import { NavController,NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-destination',
  templateUrl: 'destination.html',
})
export class Destination {
  slides = [];
    constructor(public navCtrl: NavController,
        			  public navParams: NavParams,
        			  public authService: AuthService,
        			  public alertCtrl: AlertController) {
      this.slides.push('../../assets/bg_beaches.png');
      this.slides.push('../../assets/bg_romantic.png');
      this.slides.push('../../assets/bg_paradise.png');      
	}
	    


    logout() {
        this.authService.logout();
        this.navCtrl.setRoot(Login);
    };	    
}

