var BookTypes;
(function (BookTypes) {
    BookTypes[BookTypes["Biography"] = 3] = "Biography";
    BookTypes[BookTypes["Fiction"] = 8] = "Fiction";
    BookTypes[BookTypes["History"] = 9] = "History";
    BookTypes[BookTypes["Poetry"] = 4] = "Poetry";
    BookTypes[BookTypes["Queer Studies"] = 9] = "Queer Studies";
})(BookTypes || (BookTypes = {}));
var allBooks = [
    { title: 'A Room with a View', category: BookTypes.Fiction },
    { title: 'Maurice', category: BookTypes.Fiction },
    { title: 'Howl', category: BookTypes['Queer Studies'] },
    { title: 'Long Walk to freedom', category: BookTypes.Biography },
    { title: 'A Natural History of Ghosts', category: BookTypes.History }
];
function getBooksByCategory(category) {
    return allBooks.filter(function (b) { return b.category === category; }).map(function (b) { return b.title; });
    //Following object-destructuring is not allowed: 
    //return allBooks.filter(({category}) => category === category).map(({title}) => title);
}
// console.log(BookTypes.Poetry);
// console.log(BookTypes.History);
// console.log(BookTypes[3]);
// console.log(BookTypes[11]);
console.log('Fiction books:', getBooksByCategory(BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));
//# sourceMappingURL=app.js.map