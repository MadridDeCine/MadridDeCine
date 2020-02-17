const express = require('express')
const router = express.Router()

const Suggestion = require('../models/suggestion.model')


// Listado de peliculas
router.get('/', (req, res) => {
  Suggestion.find()
    .then(allsuggestions => res.render('suggestion/suggestion-index', { suggestions: allsuggestions }))
    .catch(err => console.log("Error al consultar las peliculas en BBDD: ", err))
})

module.exports = router

// Creación de sugerencias
router.get('/new', (req, res) => res.render('suggestion/suggestion-new'))
router.post('/new', (req, res) => {

  const { name, description, addres, recommendation } = req.body

  Suggestion.create({ name, description, addres, recommendation })
    .then(() => res.redirect('/suggestion/sugestion-new'))
    .catch(err => console.log(err))
})
