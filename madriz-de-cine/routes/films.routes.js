const express = require('express')
const router = express.Router()

const Film = require('../models/film.model')



// Aquí los endpoints

router.get('/',(req,res) => {
    Film.find()
    .then(theFilms => res.render('film/film-index',{films:theFilms}))
    .catch(err => console.log("Ha ocurrido un error",err))
    })

router.get('/:id',(req,res) => {
    Film.findById(req.params.id)
    .then(theFilm => res.render('film/film-details', theFilm))
    .catch(err => console.log("Ha ocurrido un error",err))
    
})


router.get('/new',(req,res) => {
    Film.find()
    .then(theFilm=> res.render('film/new-film',{films:theFilm}))
    .catch(err => console.log("Ha ocurrido un error creando parques en la base de datos",err))
})

router.post('/new',(req,res) => {
    Film.create(req.body)
        .then(theFilm => res.redirect('/film/new'))
        .catch(err => console.log("Ha ocurrido un error creando parques en la base de datos",err))
})

router.get('/delete/:id',(req,res) => {

    Film.findByIdAndDelete(req.params.id)
    .then(x => res.redirect('/film'))
    .catch(err => console.log("Ha ocurrido un error creando parques en la base de datos",err))
})

router.get('/edit/:id',(req,res)=>{
  Film.findById(req.params.id)
  .then(theFilm => {
    console.log(theFilm)
    res.render('film/edit-film', theFilm)})
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/edit/:id',(req,res)=>{

  let {username,email} = req.body

  User.findByIdAndUpdate(req.params.id, {username,password:hashPass,email})
  .then(x=> res.redirect('/auth/user'))
})


module.exports = router