enum BookTypes  {Biography = 3, Fiction = 8, History, Poetry = 4, 'Queer Studies' = 9}

const allBooks = [
    {title : 'A Room with a View', category: BookTypes.Fiction},
    {title : 'Maurice', category: BookTypes.Fiction},
    {title : 'Howl', category: BookTypes['Queer Studies']},
    {title : 'Long Walk to freedom', category: BookTypes.Biography},
    {title : 'A Natural History of Ghosts', category: BookTypes.History}
];

export { BookTypes, allBooks };