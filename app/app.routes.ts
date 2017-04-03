import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { ProductGridComponent } from './product/product-grid.component';
import { ProductViewComponent } from './product/product-view.component';
import { CartViewComponent } from './cart/cart-view.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'products', component: WelcomeComponent },
    { path: 'product/:id', component: ProductViewComponent },
    { path: 'cart', component: CartViewComponent }
];

export const routing = RouterModule.forRoot(routes);