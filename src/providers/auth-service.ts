import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	AuthToken;

    constructor() {
    }
    
    authenticate(user) {
    	if (user.name == "ibm" && user.password == "123456") return true;
    	else return false;
    }
  }