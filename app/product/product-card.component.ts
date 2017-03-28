import { Component, Input } from '@angular/core';

import { Product } from './product.service';

@Component({
    selector: 'db-product-card',
    templateUrl: 'app/product/product-card.component.html'
})
export class ProductCardComponent {
    @Input() productRow: Product[];
}