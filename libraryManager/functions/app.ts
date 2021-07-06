import { BookTypes, allBooks } from '../constants';

function getBooksByCategory(category: BookTypes): string[] {
    return allBooks.filter(b => b.category === category).map(b => b.title)
}

//Types: any , void
function showAnything(param1 : any) : void {
    console.log(`Show me this: ${param1}`);
}
console.log('Fiction books:', getBooksByCategory(BookTypes.Fiction));
console.log('Biographies:', getBooksByCategory(BookTypes.Biography));

console.log(showAnything(1));
console.log(showAnything('cdeed'));
console.log(showAnything(BookTypes));
console.log(showAnything(JSON.stringify(BookTypes)));


