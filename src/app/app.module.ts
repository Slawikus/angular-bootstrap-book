import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// import { InMemoryDataService } from './in-memory-data.service';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutViewComponent } from './checkout/checkout-view.component';

import { routing } from './app.routes';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyD-u3fcc7mSAFPzSQ4takShflsKJQzMMng",
    authDomain: "ecommerce-3adb8.firebaseapp.com",
    databaseURL: "https://ecommerce-3adb8.firebaseio.com",
    projectId: "ecommerce-3adb8",
    storageBucket: "ecommerce-3adb8.appspot.com",
    messagingSenderId: "1069772899797"
  };

const firebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Redirect
}

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
        // InMemoryWebApiModule.forRoot(InMemoryDataService),
        CategoryModule, 
        ProductModule,
        CartModule, 
        AuthModule,
        routing
    ],
    declarations: [ 
        AppComponent, 
        NavbarComponent, 
        WelcomeComponent, 
        FooterComponent,
        CheckoutViewComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
