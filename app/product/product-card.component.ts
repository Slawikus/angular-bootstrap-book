import { Component, Input } from '@angular/core';

import { Product } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'db-product-card',
    templateUrl: 'app/product/product-card.component.html'
})
export class ProductCardComponent {
    @Input() productRow: Product[];

    constructor(private cartService: CartService) {}

    addToCart (product: Product) {
        this.cartService.addProduct(product);
    }
}