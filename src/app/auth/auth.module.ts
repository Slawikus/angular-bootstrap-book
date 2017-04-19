import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInComponent } from './sign-in.component';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule ],
    declarations: [ SignInComponent ],
    exports: [ SignInComponent ],
    providers: [ AuthService, AuthGuard ]
})
export class AuthModule {}