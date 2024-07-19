//script 1
const book = {
    title: 'NextJs',
    author: 'K J',
    year: 2024,
}
console.log(book);
console.log(book.title, book.author);

book.details = function() {
    return `${this.author}`;
}
console.log(book.details());

book.setYear = function(year) {
    this.year = year;
    console.log(this);
}
book.setYear(2025);

console.log('------------------------')


//script 2
const library = {
    name:'Saraswati Mahal Library',
    books: [
        book,
        {
            title: 'ReactJs',
            author: 'M J',
            year: 2024,
        },
        {
            title: 'MERN',
            author: 'KUMAR',
            year: 2023
        }
    ]
}

console.log(library);
console.log(library.name);

console.log('------------------------')


for(let i = 0; i < library.books.length ; i++) {
    console.log(library.books[i].title)
}

console.log('------------------------')

//activity 4

for(let obj of library.books) {
    obj.getDeatils = function() {
        return `${this.title} : ${this.author}`
    }
    console.log(obj.getDeatils())
}

console.log('------------------------')

//script 3
for(let obj of library.books) {
    for(let prop in obj) {
        console.log(`${prop} : ${obj[prop]}`)
    }
}

console.log('------------------------')

for(let obj of library.books) {
    console.log(Object.keys(obj))
    console.log(Object.values(obj))
}

console.log('------------------------')
