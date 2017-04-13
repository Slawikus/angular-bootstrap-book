import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductGridComponent } from './product/product-grid.component';
import { ProductViewComponent } from './product/product-view.component';
import { CartViewComponent } from './cart/cart-view.component';
import { CheckoutViewComponent } from './checkout/checkout-view.component';
import { SignInComponent } from './auth/sign-in.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'login', component: SignInComponent },
    { path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard] },
    { path: 'products', component: WelcomeComponent },
    { path: 'product/:id', component: ProductViewComponent },
    { path: 'cart', component: CartViewComponent },
    { path: 'checkout', component: CheckoutViewComponent }
];

export const routing = RouterModule.forRoot(routes);