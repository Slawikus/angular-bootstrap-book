import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from '../category/category.service';

@Component({
    selector: 'db-welcome',
    templateUrl: 'app/welcome/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    cardCategories: Category[];
    constructor(private categoryService: CategoryService) {}

    ngOnInit(): void {
        this.categoryService
            .getCategories()
            .subscribe( (categories: Category[]) => {
                this.cardCategories = categories;
            });
    }
}