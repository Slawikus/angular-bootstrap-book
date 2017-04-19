import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
    selector: 'db-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {
    submitted: boolean = false;
    error: string = '';
    username: string = '';
    loginForm = new FormGroup ({
        email: new FormControl(),
        password: new FormControl()
    });

    constructor(private authService: AuthService,
                private router: Router) {}

    onSubmit(): void {
        this.submitted = true;
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
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