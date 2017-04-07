import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

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

    getProduct(id: string): Observable<Product> {
        return this.http
            .get(this.productsUrl + `/${id}`)
            .map( (response: Response) => response.json().data as Product)
            .catch(this.handleError);
    }

    getProducts(category?: string, search?: string):Observable<Product[]> {
        let url = this.productsUrl;

        if (category) {
            url += `/?categoryId=${category}`;
        } else if (search) {
            url += `/?title=${search}`;
        }
        return this.http
            .get(url)
            .map( (response:Response) => response.json().data as Product[] )
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        let errorMsg = (error.message) ? error.message : error.status ?  
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occured: ${errorMsg}`);
        return Observable.throw(errorMsg);
    }
}
