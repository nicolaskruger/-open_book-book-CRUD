import { Book } from "../dtos/book";

const books: Book[] = []

const addBook = (book: Book) => books.push(book)
const findBookByTitle = (title: string) => books.find(book => book.title === title)
const findBookById = (id: string) => books.find(book => book.id === id)
const alterBook = (book: Book) => {
    const _book = findBookById(book.id)
    if(!_book) throw new Error("book not found")
    _book.title = book.title
}  

export {
    addBook,
    findBookByTitle,
    alterBook,
    findBookById
}