import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SignInComponent } from './sign-in.component';

@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ SignInComponent ],
    exports: [ SignInComponent ],
    providers: [ AuthService, AuthGuard ]
})
export class AuthModule {}