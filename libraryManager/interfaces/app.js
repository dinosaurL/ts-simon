"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
function getBooksByCategory(selectedCategory) {
    //Following object-destructuring is allowed because of interface declaration in: 
    return constants_1.allBooks.filter(function (_a) {
        var category = _a.category;
        return category === selectedCategory;
    }).map(function (b) { return b.title; });
}
// console.log(BookTypes.Poetry);
// console.log(BookTypes.History);
// console.log(BookTypes[3]);
// console.log(BookTypes[11]);
console.log('Fiction books:', getBooksByCategory(constants_1.BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(constants_1.BookTypes.Biography));
//# sourceMappingURL=app.js.map