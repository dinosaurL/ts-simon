import { BookTypes, allBooks, Book } from '../constants';

const getBooksByCategory = (selectedCategory: BookTypes): string[] => {

    //Following object-destructuring is allowed because of interface declaration in: 

    return allBooks.filter(({category}) => category === selectedCategory).map(b => b.title);

}


const printBook = (book: Book): void =>{
    console.log(`printing book - title: ${book.title}`);
};

//Duck typing - publisher / rating:
const simonBook =  {title : 'A Natural History of Ghosts', author: 'Roger Clarke', category: BookTypes.History, 
    publisher: 'Penguin', rating:'5/5'};

console.log('Fiction books:', getBooksByCategory(BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));

printBook(simonBook)


