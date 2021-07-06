"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants");
function getBooksByCategory(category) {
    return constants_1.allBooks.filter(function (b) { return b.category === category; }).map(function (b) { return b.title; });
}
//Types: any , void
function showAnything(param1) {
    console.log("Show me this: " + param1);
}
console.log('Fiction books:', getBooksByCategory(constants_1.BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(constants_1.BookTypes.Biography));
console.log(showAnything(1));
console.log(showAnything('cdeed'));
console.log(showAnything(constants_1.BookTypes));
console.log(showAnything(JSON.stringify(constants_1.BookTypes)));
//# sourceMappingURL=app.js.map