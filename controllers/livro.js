const { getTodosOsLivros, getLivroPorId, postNovoLivro, patchLivroPorId, deletaLivroPorId } = require("../services/livro")

function getLivros(req, res) {
  try {
    const livros = getTodosOsLivros()
    res.send(livros)    
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function getLivro(req, res) {
  try {
    const id = req.params.id

    if (id && Number(id)) {
      const livro = getLivroPorId(id)
      res.send(livro)  
    } else {
      res.status(422).send("insira um id válido")
    }
    
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function postLivro(req, res) {
  try {
    const novoLivro = req.body
    if (novoLivro.nome) {
      postNovoLivro(novoLivro)
      res.status(201).send("Livro inserido com sucesso")
    } else {
      res.status(422).send("insira um nome válido")
    }
    
  } catch (error) {
    res.status(500).send(error.message)
  }
}

function patchLivro(req, res) {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      const body = req.body
      patchLivroPorId(body, id)
      res.send("Item modificado com sucesso")
    } else {
      res.status(422).send("insira um id válido")
    }
    
  } catch (error) {
    res.status(500).send(error.message)    
  }
}

function deleteLivro(req, res) {
  try {
    const id = req.params.id
    if (id && Number(id)) {
      deletaLivroPorId(id)
      res.send("livro deletado com sucesso")
    } else {
      res.status(422).send("insira um id válido")
    }
    
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  getLivros,
  getLivro,
  postLivro,
  patchLivro,
  deleteLivro
}