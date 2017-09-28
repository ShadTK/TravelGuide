import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, Platform, NavController,AlertController} from 'ionic-angular/index';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavMock, PlatformMock, StatusBarMock, SplashScreenMock } from '../../../test-config/mocks-ionic';
import { AuthService } from '../../providers/auth-service.js'
import { AuthMock } from '../../mocks'
import { Destination } from  '../destination/destination'
import { LoadingController } from 'ionic-angular';
import { LoadingControllerMock } from '../../mocks';

import { Login } from './login';

  let de: DebugElement;
  let comp: Login;
  let fixture: ComponentFixture<Login>;
  let login = null;

describe('Login Page', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Login],
      imports: [
        IonicModule.forRoot(Login),
      ],
      providers: [
        { provide: NavController, useClass: NavMock},
        { provide: AuthService, useClass: AuthMock},
        { provide: LoadingController, useClass: LoadingControllerMock },
        AlertController,
      ]
    });
  }));

beforeEach(() => {

    fixture = TestBed.createComponent(Login);
    comp = fixture.componentInstance;
  });


it('is created', () => {
	expect(fixture).toBeTruthy;
	expect(comp).toBeTruthy;
});

afterEach(() => {
fixture.destroy();
comp = null;
});


});