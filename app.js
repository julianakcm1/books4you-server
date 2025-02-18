const express = require('express')
const bookRoute = require('./routes/book')
const favoriteRoute = require('./routes/favorite')
const cors = require("cors");

const app = express()
app.use(express.json()) // reading JSON
app.use(cors({origin: '*'}));

const port = 8000

app.use('/books', bookRoute)
app.use('/favorites', favoriteRoute)

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})