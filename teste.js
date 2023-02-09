const fs = require("fs") //insere e le dados json

/*
const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoLivro = { id: '3', nome: 'Livro terceiro' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoLivro]))
*/
console.log(JSON.parse(fs.readFileSync("livros.json")))
