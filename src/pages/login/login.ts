import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { Destination } from '../destination/destination';

@Component({
  selector: 'page-login',
  providers: [AuthService],
  templateUrl: 'login.html'
})
export class Login {
//The below stores username and password information for checking.
	usercreds = {
		            name: '',
		            password: '',
	};

	constructor(public navCtrl: NavController, public authservice: AuthService, public alertCtrl: AlertController) {
		
	}
  //The below function match the username and password provided with the users available on the database.
  //If a match is found, the login is performed.
  //If not, a popup message informs that user and password are incorrect.
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

