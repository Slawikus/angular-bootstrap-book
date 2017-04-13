import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'db-sign-in',
    templateUrl: './sign-in.component.html',
    providers: [ AuthService ]
})
export class SignInComponent {
    submitted: boolean = false;
    error: string = '';
    username: string = '';

    constructor(private authService: AuthService,
                private router: Router) {}

    onSubmit(value:any): void {
        this.submitted = true;
        this.authService.login(value, 'secret')
            .then( (user)=> {
                this.username = user.auth.email;
                this.postSignIn();
            })
            .catch( (error) => {
                this.error = 'Username or password is not correct';
                this.submitted = false;
            });
    }

    private postSignIn() {
        this.router.navigate(['/welcome']);
    }

}