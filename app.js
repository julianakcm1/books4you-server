const express = require('express')
const bookRoute = require('./routes/book')

const app = express()
app.use(express.json()) // reading JSON

const cors = require("cors");
app.use(cors());

const port = 8000

app.use('/books', bookRoute)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})