const express = require('express')
const router = express.Router()

const Suggestion = require('../models/suggestion.model')


// Listado de sugerencias
router.get('/', (req, res) => {
  Suggestion.find()
    .then(allsuggestions => res.render('suggestion/suggestion-index', { suggestions: allsuggestions }))
    .catch(err => console.log("Error al consultar las peliculas en BBDD: ", err))
})


// Creación de sugerencias
router.get('/new', (req, res) => res.render('suggestion/suggestion-new'))
router.post('/new', (req, res) => {
  
  const { name, description, address, recommendation } = req.body
  
  Suggestion.create({ name, description, address, recommendation })
  .then(() => res.redirect('/suggestion'))
  .catch(err => console.log(err))
})

// Eliminar celebridad
router.get('/delete/:id',(req,res) => { 
  
  Suggestion.findByIdAndDelete(req.params.id)
  .then(x => res.redirect('/suggestion'))
  .catch(err => console.log("Ha ocurrido un error al crear la sugerencia",err))
})

// Detalles de una sugerencia
router.get('/:id',(req,res) => {
  Suggestion.findById(req.params.id)
  .then(oneSuggestion => res.render('suggestion/suggestion-details', oneSuggestion))
  .catch(err => console.log("Ha ocurrido un error al consultar la bbdd",err))
})

// Editar una sugerencia

router.get('/edit/:id',(req,res)=>{
  Suggestion.findById(req.params.id)
  .then(oneSuggestion => {
    console.log(oneSuggestion)
    res.render('suggestion/suggestion-edit', oneSuggestion)})
  .catch(err => console.log("Ha ocurrido un error al editar la sugerencia",err))
})

router.post('/edit/:id',(req,res)=>{

  let {name, description, address, recommendation} = req.body

  Suggestion.findByIdAndUpdate(req.params.id, {name, description, address, recommendation})
  .then(x=> res.redirect(`/suggestion/${req.params.id}`))
})

module.exports = router

