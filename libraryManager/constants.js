"use strict";
exports.__esModule = true;
exports.allBooks = exports.BookTypes = void 0;
var BookTypes;
(function (BookTypes) {
    BookTypes[BookTypes["Biography"] = 3] = "Biography";
    BookTypes[BookTypes["Fiction"] = 8] = "Fiction";
    BookTypes[BookTypes["History"] = 9] = "History";
    BookTypes[BookTypes["Poetry"] = 4] = "Poetry";
    BookTypes[BookTypes["Self Help"] = 9] = "Self Help";
})(BookTypes || (BookTypes = {}));
exports.BookTypes = BookTypes;
;
var allBooks = [
    { title: 'A Room with a View', author: 'EM Forster', category: BookTypes.Fiction },
    { title: 'Maurice', author: 'EM Forster', category: 8 },
    { title: 'I\'m Ok, You\'re Ok', author: 'Thomas Harris', category: BookTypes['Self Help'] },
    { title: 'Long Walk to freedom', author: 'Nelson Mandela', category: BookTypes.Biography },
    { title: 'A Natural History of Ghosts', author: 'Roger Clarke', category: BookTypes.History }
];
exports.allBooks = allBooks;
