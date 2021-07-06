enum BookTypes  {Biography = 3, Fiction = 8, History, Poetry = 4, 'Self Help' = 9}


interface Books {
    title: string,
    category: BookTypes
};

const allBooks : Array<Books> = [
    {title : 'A Room with a View', category: BookTypes.Fiction},
    {title : 'Maurice', category: 8},
    {title : 'I\'m Ok, You\'re Ok', category: BookTypes['Self Help']},
    {title : 'Long Walk to freedom', category: BookTypes.Biography},
    {title : 'A Natural History of Ghosts', category: BookTypes.History}
];

export { BookTypes, allBooks };