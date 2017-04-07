import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Category {
    id: string;
    title: string;
    desc: string;
    imageS: string;
    imageL: string;
}

@Injectable() 
export class CategoryService {
    private categoriesUrl = 'app/categories';

    private categories: Category[] = [];

    constructor(private http: Http) {}

    getCategories(): Promise<Category[]> {
        return this.http
            .get(this.categoriesUrl)
            .toPromise()
            .then( (response: Response) => {
                this.categories = response.json().data as Category[];
                return this.categories;
            })
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

    private handleError(error: any): Promise<any> {
        window.alert(`An error occured: ${error}`);
        return Promise.reject(error.message || error);
    }
}