import { Component } from '@angular/core';
import { Category } from '../category/category';
import { getCategories } from '../category/category';

@Component({
    selector: 'db-welcome',
    templateUrl: 'app/welcome/welcome.component.html'
})
export class WelcomeComponent{
    cardCategories: Category[] = getCategories();
}