import { Injectable } from '@angular/core';

import { Product, ProductService } from '../product/product.service';

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
    

    constructor(private productService: ProductService){
        let allProducts:Product[] = this.productService.getProducts()
        this.addProduct(allProducts[0]);
        this.addProduct(allProducts[1]);
        this.addProduct(allProducts[1]);
    }

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
        return this.cart.items.find( (cartItem: CartItem):boolean => 
            cartItem.product.id === id
        );
        // return this.cart.items.find(function(cartItem:CartItem):boolean {
        //     return cartItem.product.id === id;
        // });
    }

    private remove(item: CartItem) {
        let indx: number = this.cart.items.indexOf(item);
        if (indx !== -1) {
            this.cart.items.splice(indx, 1);
        }
    }
}

