import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';

import { routing } from './app.routes';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule, 
        ReactiveFormsModule,
        CategoryModule, 
        ProductModule,
        CartModule, 
        routing
    ],
    declarations: [ 
        AppComponent, 
        NavbarComponent, 
        WelcomeComponent, 
        FooterComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
