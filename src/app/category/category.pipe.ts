import { Pipe, PipeTransform } from '@angular/core';
import { Category, CategoryService } from './category.service';

@Pipe({ name: 'categoryTitle' })
export class CategoryTitlePipe implements PipeTransform {
    constructor(private categoryService: CategoryService) {}
    transform(id: string): string {
        let category: Category = this.categoryService.getCategory(id);
        return category ? category.title : '';
    }
}