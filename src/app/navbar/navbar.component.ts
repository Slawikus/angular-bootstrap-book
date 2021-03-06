import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'db-navbar',
    templateUrl: './navbar.component.html',
    providers: [ AuthService ]
})
export class NavbarComponent {
    appName: string = 'Dream Bean';

    constructor(public authService: AuthService,
                private router: Router) {}

    logout() {
        this.authService.logout();
        this.router.navigateByUrl("/login");
    }
}
