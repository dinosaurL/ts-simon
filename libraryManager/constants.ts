enum BookTypes  {Biography = 3, Fiction = 8, History, Poetry = 4, 'Self Help' = 9}


interface Book {
    title: string,
    author: string,
    pages?: number,
    category: BookTypes
};

const allBooks : Array<Book> = [
    {title : 'A Room with a View', author: 'EM Forster', category: BookTypes.Fiction},
    {title : 'Maurice', author: 'EM Forster', category: 8},
    {title : 'I\'m Ok, You\'re Ok', author: 'Thomas Harris', category: BookTypes['Self Help']},
    {title : 'Long Walk to freedom', author: 'Nelson Mandela', category: BookTypes.Biography},
    {title : 'A Natural History of Ghosts', author: 'Roger Clarke', category: BookTypes.History}
];

export { BookTypes, Book, allBooks };