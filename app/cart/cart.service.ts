import { Injectable } from '@angular/core';

import { Product } from '../product/product.service';

export class Cart {
    count: number = 0;
    amount: number = 0;
    items: CartItem[] = [];
}

export interface CartItem {
    product: Product;
    count: number;
    amount: number;
}

@Injectable()
export class CartService {
    cart: Cart = new Cart();

    addProduct(product: Product) {
        let item: CartItem = this.findItem(product.id);

        if (item) {
            item.count++;
            item.amount += product.price;
        } else {
            item = {
                product: product,
                count: 1,
                amount: product.price
            };
            this.cart.items.push(item);
        }
        this.cart.count++;
        this.cart.amount += product.price;
    }

    removeProduct(product: Product) {
        let item: CartItem = this.findItem(product.id);

        if (item) {
            item.count--;
            if (!item.count) {
                this.remove(item);
            }
            this.cart.count--;
            this.cart.amount -= product.price;
        }
    }

    removeItem(item: CartItem) {
        this.remove(item);
        this.cart.count -= item.count;
        this.cart.amount -= item.amount;
    }

    private findItem(id: string): CartItem {
        for (let i=0; i<this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === id) {
                return this.cart.items[i];
            }
        }
        return null;
    }

    private remove(item: CartItem) {
        let indx: number = this.cart.items.indexOf(item);
        if (indx !== -1) {
            this.cart.items.splice(indx, 1);
        }
    }
}
