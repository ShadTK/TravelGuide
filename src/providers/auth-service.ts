import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

	isLoggedin: boolean
	AuthToken;

    constructor() {
        this.isLoggedin = false;
    }
    
    LoggedIn() {
        this.isLoggedin = true;
    }
        
    destroyUserCredentials() {
        this.isLoggedin = false;
    }
    
    authenticate(user) {
    	if (user.name == "ibm" && user.password == "123456") return true;
    	else return false;
    }
    
    logout() {
        this.destroyUserCredentials();
    }
}