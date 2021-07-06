"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    { title: 'A Room with a View', category: BookTypes.Fiction },
    { title: 'Maurice', category: 8 },
    { title: 'I\'m Ok, You\'re Ok', category: BookTypes['Self Help'] },
    { title: 'Long Walk to freedom', category: BookTypes.Biography },
    { title: 'A Natural History of Ghosts', category: BookTypes.History }
];
exports.allBooks = allBooks;
//# sourceMappingURL=constants.js.map