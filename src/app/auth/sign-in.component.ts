import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
    selector: 'db-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent {
    submitted: boolean = false;
    error: string = '';
    loginForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router,
                private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required,  Validators.minLength(4)]],
            password: ['', Validators.required]
        });
    }

    onSubmit(): void {
        this.submitted = true;
        this.authService.login(this.email, this.password)
            .then( (user)=> {
                this.postSignIn();
            })
            .catch( (error) => {
                this.error = 'Username or password is not correct';
                this.submitted = false;
            });
    }

    private get email(): string {
        return this.loginForm.value.email as string;
    }

    private get password(): string {
        return this.loginForm.get('password').value;
    }

    private postSignIn() {
        this.router.navigate(['/welcome']);
    }

}