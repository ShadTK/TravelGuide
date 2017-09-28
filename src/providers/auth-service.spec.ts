import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthService } from './auth-service';


let authService = null;

describe('Authentication Services', ()=>{

	beforeEach(() =>{
		authService = new AuthService();
	});

it('should return true if user and password are correct', () =>{

	expect(authService.authenticate({name:"ibm", password:"123456"})).toBe(true);

    }
);

it('should return false if user and password are incorrect', () =>{

	expect(!authService.authenticate({name:"ibm", password:"123456"})).toBe(false);

    }
);




});

