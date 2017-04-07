import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface Product {
    id: string;
    categoryId: string;
    title: string;
    price: number;
    isSpecial: boolean;
    desc: string;
    imageS: string;
    imageL: string;
}

@Injectable()
export class ProductService {
    private productsUrl = 'app/products';

    constructor(private http:Http) {}

    getProduct(id: string): Promise<Product> {
        return this.http
            .get(this.productsUrl + `/${id}`)
            .toPromise()
            .then( (response: Response) =>
                response.json().data as Product)
            .catch(this.handleError);
    }

    getProducts(category?: string, search?: string):Promise<Product[]> {
        let url = this.productsUrl;

        if (category) {
            url += `/?categoryId=${category}`;
        } else if (search) {
            url += `/?title=${search}`;
        }
        return this.http
            .get(url)
            .toPromise()
            .then( (response:Response) => response.json().data as Product[] )
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        window.alert(`An error occured: ${error}`);
        return Promise.reject(error.message || error);
    }
}
