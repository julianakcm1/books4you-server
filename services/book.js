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

module.exports = {
    getAllBooks,
    getBookByID,
    insertBook
}