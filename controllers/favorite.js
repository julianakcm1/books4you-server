const { getAllFavorites, deleteFavoriteByID, insertFavorite } = require('../services/favorite')

function getFavorites(req, res) {
  try {
      const books = getAllFavorites()
      res.send(books)
  } catch (error) {
      res.status(500)
      res.send(error.message)
  }
}

function postFavorite(req, res) {
  try {
    const id = req.params.id
    insertFavorite(id)
    res.status(201)
    res.send("The favorite book was successfully registered.")
  } catch(error) {
      res.status(500)
      res.send(error.message)
  }
}

function deleteFavorite(req,res) {
  try {
    const id = req.params.id

    if(id && Number(id)) {
        deleteFavoriteByID(id)
        res.send("The favorite book was deleted successfully.")
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
  getFavorites,
  postFavorite,
  deleteFavorite,
}