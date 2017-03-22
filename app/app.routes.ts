import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: 'welcome', component: WelcomeComponent },
    // { path: 'products', component: ProductListComponent },
    // { path: 'products/:id', component: ProductComponent }
];

export const routing = RouterModule.forRoot(routes);