export class AuthMock {
   public authenticate(user) {
    	if (user.name == "ibm" && user.password == "123456") return  true;
    	else return false;
    }
  }

export class LoadingControllerMock {
    _getPortal(): any { return {} };
    create(options?: any) { 
        return new LoadingMock()
    };
}

class LoadingMock {
    present() { };
    dismiss() { };
    dismissAll() { };
}