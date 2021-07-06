import { BookTypes, allBooks } from '../constants';

function getBooksByCategory(selectedCategory: BookTypes): string[] {

    //Following object-destructuring is allowed because of interface declaration in: 

    return allBooks.filter(({category}) => category === selectedCategory).map(b => b.title);

}

// console.log(BookTypes.Poetry);
// console.log(BookTypes.History);
// console.log(BookTypes[3]);
// console.log(BookTypes[11]);

console.log('Fiction books:', getBooksByCategory(BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));


