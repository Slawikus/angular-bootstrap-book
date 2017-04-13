import { Injectable } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {
   private authState: FirebaseAuthState = null;

   constructor(public af: AngularFire) {
       this.af.auth.subscribe( (state: FirebaseAuthState) => this.authState = state);
   }

    get authenticated(): boolean {
        return this.authState !== null;
    }

   login(email: string, password: string): firebase.Promise<FirebaseAuthState> { 
       return this.af.auth.login({ 
           email: email, 
           password: password 
       }, {
           provider: AuthProviders.Password,
           method: AuthMethods.Password
       }); 
    }

    logout(): void {
        this.af.auth.logout();
    }
}