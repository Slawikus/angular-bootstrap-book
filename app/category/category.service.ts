import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

export class Category {
    id: string;
    title: string;
    desc: string;
    imageS: string;
    imageL: string;
}

@Injectable() 
export class CategoryService {
    private categoriesUrl = 'categories';

    private categories: Category[] = [];

    constructor(private af: AngularFire) {}

    getCategories(): Observable<Category[]> {
        return this.af.database
            .list(this.categoriesUrl)
            .catch(this.handleError);
    }

    getCategory(id:string): Category {
        for (let i=0; i<this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        return null;
    }

    private handleError(error: any): Observable<any> {
        let errorMsg = (error.message) ? error.message : error.status ?  
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occured: ${errorMsg}`);
        return Observable.throw(errorMsg);
    }
}