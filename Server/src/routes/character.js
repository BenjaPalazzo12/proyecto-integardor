const characterRouter = require('express').Router()
const {getCharById} = require('../controllers/getCharById');



characterRouter.get('/:id', getCharById)


module.exports =  characterRouter