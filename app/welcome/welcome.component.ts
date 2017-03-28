import { Component } from '@angular/core';
import { Category, CategoryService } from '../category/category.service';

@Component({
    selector: 'db-welcome',
    templateUrl: 'app/welcome/welcome.component.html'
})
export class WelcomeComponent{
    cardCategories: Category[];
    constructor(private categoryService: CategoryService) {
        this.cardCategories = this.categoryService.getCategories();
    }
}