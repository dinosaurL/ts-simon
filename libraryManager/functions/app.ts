import { BookTypes, allBooks } from '../constants';

function getBooksByCategory(category: BookTypes): string[] {
    return allBooks.filter(b => b.category === category).map(b => b.title);

    //Following object-destructuring is not allowed: 
    //return allBooks.filter(({category}) => category === category).map(({title}) => title);
}

// console.log(BookTypes.Poetry);
// console.log(BookTypes.History);
// console.log(BookTypes[3]);
// console.log(BookTypes[11]);

console.log('Fiction books:', getBooksByCategory(BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));


