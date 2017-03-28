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
var router_1 = require('@angular/router');
var product_1 = require('./product');
var ProductGridComponent = (function () {
    function ProductGridComponent(router) {
        var _this = this;
        this.router = router;
        this.products = [];
        this.router.queryParams.subscribe(function (params) {
            var category = params['category'];
            var search = params['search'];
            var products = product_1.getProducts(category, search);
            _this.products = _this.transform(products);
        });
    }
    ProductGridComponent.prototype.transform = function (source) {
        var index = 0;
        var length = source.length;
        var products = [];
        while (length) {
            var row = [];
            if (length >= 3) {
                for (var i = 0; i < 3; i++) {
                    row.push(source[index++]);
                }
                products.push(row);
                length -= 3;
            }
            else {
                for (; length > 0; length--) {
                    row.push(source[index++]);
                }
                products.push(row);
            }
        }
        return products;
    };
    ProductGridComponent = __decorate([
        core_1.Component({
            selector: 'db-product-grid',
            templateUrl: 'app/product/product-grid.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], ProductGridComponent);
    return ProductGridComponent;
}());
exports.ProductGridComponent = ProductGridComponent;
//# sourceMappingURL=product-grid.component.js.map