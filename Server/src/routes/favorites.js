const favoritesRouter = require('express').Router()
const postCharacter = require('../controllers/postCharacter')
const deleteChar = require('../controllers/deleteChar')


favoritesRouter.post('/', postCharacter)

favoritesRouter.delete('/:id', deleteChar)

favoritesRouter.get('/', postCharacter)

module.exports = favoritesRouter