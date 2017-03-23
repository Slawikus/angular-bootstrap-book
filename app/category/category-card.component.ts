import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category';

@Component({
    selector: 'db-category-card',
    templateUrl: 'app/category/category-card.component.html'
})
export class CategoryCardComponent {
    @Input() category: Category;
    constructor(private router: Router) {}
    filterProducts(category: Category) {
        this.router.navigate(['/products'], {queryParams: { category: category.id }});
    }
}