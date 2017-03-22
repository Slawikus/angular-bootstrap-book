"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var category_1 = require('./category');
var CategoryCardComponent = (function () {
    function CategoryCardComponent() {
        this.select = new core_1.EventEmitter();
    }
    CategoryCardComponent.prototype.browse = function () {
        this.select.emit(this.category);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', category_1.Category)
    ], CategoryCardComponent.prototype, "category", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], CategoryCardComponent.prototype, "select", void 0);
    CategoryCardComponent = __decorate([
        core_1.Component({
            selector: 'db-category-card',
            templateUrl: 'app/category/category-card.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CategoryCardComponent);
    return CategoryCardComponent;
}());
exports.CategoryCardComponent = CategoryCardComponent;
//# sourceMappingURL=category-card.component.js.map