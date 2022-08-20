class Book {
    constructor(title, pages, isbn) {
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }

    printIsbn() {
        console.log(this.isbn);
    }
}

const artOfWar = new Book('Art of war', '150', 'isbn')
console.log(artOfWar);

// Inheritance
class ItBook extends Book {
    constructor(title, pages, isbn, technology) {
        super(title, pages, isbn);
        this.technology = technology
    }
}

const itBook = new ItBook('it', '300', 'isbn', 'paper')
console.log(itBook);
class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}


let godo = new Person('godo')
console.log(godo._name);
godo.name = "jhon"

console.log(godo._name);