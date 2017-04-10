import { Injectable } from '@angular/core';
// import { Headers, Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

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
    private productsUrl = 'products';

    constructor(private af: AngularFire) {}

    getProduct(id: string): Observable<Product> {
        return this.af.database
            .object(this.productsUrl + `/${id}`)
            .catch(this.handleError);
    }

    getProducts(category?: string, search?: string): Observable<Product[]> {
        if (category || search) {
            let query = <any>{};
            if (category) {
                query.orderByChild = 'categoryId';
                query.equalTo = category;
            } else {
                query.orderByChild = 'title';
                query.startAt = search.toUpperCase();
                query.endAt = query.startAt + '\uf8ff';
            }
            return this.af.database
                .list(this.productsUrl, {query: query})
                .catch(this.handleError);
        }
        else {
            return Observable.empty();
        }
    }

    private handleError(error: any): Observable<any> {
        let errorMsg = (error.message) ? error.message : error.status ?  
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occured: ${errorMsg}`);
        return Observable.throw(errorMsg);
    }
}
