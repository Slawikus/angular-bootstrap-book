import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Product } from './product.service';

@Component({
    selector: 'db-product-search',
    templateUrl: 'app/product/product-search.component.html'
})
export class ProductSearchComponent {
    disabled: boolean = true;

    constructor(private router: Router) {}

    searchProduct(value:string) {
        this.router.navigate(['/products'], { queryParams: { search: value }});
    }

    searchChanged(value: string) {
        if (value) {
            this.disabled = false;
        } else {
            this.disabled = true;
        }
    }
}