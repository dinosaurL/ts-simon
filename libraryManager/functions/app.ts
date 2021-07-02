enum BookTypes  {Biography = 3, Fiction = 8, History, Poetry = 4, 'Queer Studies' = 9}

const allBooks = [
    {title : 'A Room with a View', category: BookTypes.Fiction},
    {title : 'Maurice', category: BookTypes.Fiction},
    {title : 'Howl', category: BookTypes['Queer Studies']},
    {title : 'Long Walk to freedom', category: BookTypes.Biography},
    {title : 'A Natural History of Ghosts', category: BookTypes.History}
];

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

