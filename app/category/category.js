"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Category = (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var categories = [
    { id: '1', title: 'Bread & Bakery', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
    { id: '2', title: 'Takeaway', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
    { id: '3', title: 'Dairy', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
    { id: '4', title: 'Meat', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
    { id: '5', title: 'Seafood', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
    { id: '6', title: 'Fruit & Veg', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
];
function getCategories() {
    return categories;
}
exports.getCategories = getCategories;
function getCategory(id) {
    for (var i = 0; i < categories.length; i++) {
        if (categories[i].id === id) {
            return categories[i];
        }
    }
    throw new CategoryNotFoundException("Category " + id + " not found");
}
exports.getCategory = getCategory;
var CategoryNotFoundException = (function (_super) {
    __extends(CategoryNotFoundException, _super);
    function CategoryNotFoundException(message) {
        _super.call(this, message);
    }
    return CategoryNotFoundException;
}(Error));
exports.CategoryNotFoundException = CategoryNotFoundException;
//# sourceMappingURL=category.js.map