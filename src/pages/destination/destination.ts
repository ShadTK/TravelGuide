import { Component } from '@angular/core';
import { AuthService } from '../../providers/auth-service'
import { Login } from '../login/login'
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { CitiesBeaches } from '../cities-beaches/cities-beaches'
import { CitiesRomantic } from '../cities-romantic/cities-romantic'
import { CitiesParadise } from '../cities-paradise/cities-paradise'

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

//The below fix a glitch with sliders resizing.
//For more information: https://github.com/ionic-team/ionic/issues/10101
  @ViewChild(Slides) slides: Slides;
  
  public ionViewWillEnter() {
    this.slides.update();
}
      
    selectCity(){
      switch(this.slides.getActiveIndex()) {
    case 1:
        this.navCtrl.push(CitiesBeaches);
        break;
    case 2:
        this.navCtrl.push(CitiesRomantic);
        break;
    case 3:
        this.navCtrl.push(CitiesParadise);
}
    }

    logout() {
        this.authService.logout();
        this.navCtrl.setRoot(Login);
    };	    
}

