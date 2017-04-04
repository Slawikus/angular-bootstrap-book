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
    seachControl: FormControl;

    constructor(private router: Router) {}

    ngOnInit() {
        this.seachControl = new FormControl();
        this.seachControl.valueChanges.subscribe( (value:string) => {
            this.searchChanged(value);
        } );
    }

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