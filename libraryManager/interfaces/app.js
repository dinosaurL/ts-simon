"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
function getBooksByCategory(category) {
    return constants_1.allBooks.filter(function (b) { return b.category === category; }).map(function (b) { return b.title; });
    //Following object-destructuring is not allowed: 
    //return allBooks.filter(({category}) => category === category).map(({title}) => title);
}
// console.log(BookTypes.Poetry);
// console.log(BookTypes.History);
// console.log(BookTypes[3]);
// console.log(BookTypes[11]);
console.log('Interfaces-Fiction books:', getBooksByCategory(constants_1.BookTypes.Fiction));
console.log('Interfaces-Biographies:', getBooksByCategory(constants_1.BookTypes.Biography));
//# sourceMappingURL=app.js.map