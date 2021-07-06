"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
var getBooksByCategory = function (selectedCategory) {
    //Following object-destructuring is allowed because of interface declaration in: 
    return constants_1.allBooks.filter(function (_a) {
        var category = _a.category;
        return category === selectedCategory;
    }).map(function (b) { return b.title; });
};
var printBook = function (book) {
    console.log("printing book - title: " + book.title);
};
var simonBook = { title: 'A Natural History of Ghosts', author: 'Roger Clarke', category: constants_1.BookTypes.History,
    publisher: 'Penguin', rating: '5/5' };
console.log('Fiction books:', getBooksByCategory(constants_1.BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(constants_1.BookTypes.Biography));
console.log('Biographies:', getBooksByCategory(constants_1.BookTypes.Biography));
printBook(simonBook);
