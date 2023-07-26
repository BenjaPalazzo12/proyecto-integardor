const favoritesRouter = require('express').Router()
const {postFav, deleteFav, getFav} = require('../controllers/handleFavorites')


favoritesRouter.post('/', postFav)

favoritesRouter.delete('/:id', deleteFav)

favoritesRouter.get('/', getFav)

module.exports = favoritesRouter