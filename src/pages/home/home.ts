import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Destination } from '../destination/destination';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	usercreds = {
		            name: '',
		            password: '',
	};

	constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
		
	}
    login(user) {
      if(this.authservice.authenticate(user)) {
                this.navCtrl.setRoot(Destination);
            }
      else {
          let alert = this.alertCtrl.create({
            title: 'Login Failed',
            subTitle: 'Username or Password Incorrect',
            buttons: ['Dismiss']
            });
          alert.present();
	        };
    }
}

