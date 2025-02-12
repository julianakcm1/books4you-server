const fs = require("fs")

function getAllBooks() {
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookByID(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookFiltered = books.filter( book => book.id === id )[0]
    return bookFiltered
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const newBookList = [...books, newBook]

    fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json"))

    const indexToBeModified = currentBooks.findIndex( book => book.id === id )
    const modifiedContent = {...currentBooks[indexToBeModified], ...modifications}

    currentBooks[indexToBeModified] = modifiedContent
    fs.writeFileSync("books.json", JSON.stringify(currentBooks)) // object to text
}

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook,
    modifyBook
}