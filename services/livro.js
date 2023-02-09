const fs = require("fs")

function getTodosOsLivros() {
  return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))

  const livroFiltrado = livros.filter(livro => livro.id === id)[0]
  return livroFiltrado
}

function postNovoLivro(novoLivro) {
  const livros = JSON.parse(fs.readFileSync("livros.json"))
  const listaLivrosAtualizada = [...livros, novoLivro]
  fs.writeFileSync("livros.json", JSON.stringify(listaLivrosAtualizada))
}

function patchLivroPorId(modificacoes, id) {  
  let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
  const indiceAlterado = livrosAtuais.findIndex(livro => livro.id === id)
  const conteudoAlterado = { ...livrosAtuais[indiceAlterado], ...modificacoes }
  livrosAtuais[indiceAlterado] = conteudoAlterado
  fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id) {
  let livros = JSON.parse(fs.readFileSync("livros.json"))
  const livrosFiltrados = livros.filter(livro => livro.id !== id)
  fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
  getTodosOsLivros,
  getLivroPorId,
  postNovoLivro,
  patchLivroPorId,
  deletaLivroPorId
}