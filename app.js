const express = require('express')
const bookRoute = require('./routes/book')

const app = express()

const port = 8000

app.use('/books', bookRoute)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})