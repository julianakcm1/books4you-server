const fs = require("fs")

const currentData = JSON.parse(fs.readFileSync("livros.json"))
const newData = { id:'3', name: 'Livro mais que demais' }

fs.writeFileSync("livros.json", JSON.stringify([...currentData, newData ]))

console.log(JSON.parse(fs.readFileSync("livros.json")))