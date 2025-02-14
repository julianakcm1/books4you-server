const { getAllBooks, getBookByID, insertBook, modifyBook, deleteBookByID } = require('../services/book')

function getBooks(req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            const book = getBookByID(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    } 
}

function postBook(req, res) {
    try {
        const newBook = req.body
        if(req.body.name) {
            insertBook(newBook)
            res.status(201)
            res.send("The book was successfully registered.")
        } else {
            res.status(422)
            res.send("The name is required.")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook(req, res) {
    try {
        const id = req.params.id
        
        if(id && Number(id)) {
            const body = req.body
            modifyBook(body, id)
            res.send("The item has been modified successfully.")
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook(req,res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deleteBookByID(id)
            res.send("The book was deleted successfully.")
        } else {
            res.status(422)
            res.send("Invalid ID.")
        }
    } catch(error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}