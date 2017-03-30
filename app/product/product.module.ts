import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card.component';
import { ProductGridComponent } from './product-grid.component';
import { ProductSearchComponent } from './product-search.component';
import { ProductViewComponent } from './product-view.component';

import { CategoryModule } from '../category/category.module';

import { ProductService } from './product.service';

@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule, CategoryModule ],
    declarations: [ 
        ProductCardComponent, 
        ProductGridComponent, 
        ProductSearchComponent,
        ProductViewComponent
    ],
    exports: [
        ProductCardComponent, 
        ProductGridComponent, 
        ProductSearchComponent,
        ProductViewComponent
    ],
    providers: [ ProductService ]
})
export class ProductModule {}