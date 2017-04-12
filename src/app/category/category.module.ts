import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CategoryCardComponent } from './category-card.component';
import { CategorySlideComponent } from './category-slide.component';
import { CategoryListComponent } from './category-list.component';

import { CategoryTitlePipe } from './category.pipe';

import { CategoryService } from './category.service';

@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ 
        CategoryCardComponent, 
        CategorySlideComponent,
        CategoryListComponent,
        CategoryTitlePipe
    ],
    exports: [ 
        CategoryCardComponent, 
        CategorySlideComponent,
        CategoryListComponent,
        CategoryTitlePipe 
    ],
    providers: [ CategoryService ]
})
export class CategoryModule {}