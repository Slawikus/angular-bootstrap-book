import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from './product.service';

@Component({
    selector: 'db-product-search',
    templateUrl: 'app/product/product-search.component.html'
})
export class ProductSearchComponent {
    constructor(private router: Router) {}

    searchProduct(value:string) {
        this.router.navigate(['/products'], { queryParams: { search: value }});
    }
}