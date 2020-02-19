const express = require('express')
const router = express.Router()

const Film = require('../models/film.model')
const uploadCloud = require("../configs/cloudinary.config");




// Aquí los endpoints

router.get('/',(req,res) => {
    Film.find()
    .then(theFilms => res.render('film/film-index',{films:theFilms}))
    .catch(err => console.log("Ha ocurrido un error",err))
    })

router.get('/new',(req,res) => res.render('film/new-film'))

router.post('/new',uploadCloud.single("phototoupload"),uploadCloud.single("phototoupload2"),(req,res) => {

  let {title,year,director,argument,place,actors} = req.body
  console.log(
    "Y esto es lo que hace multer cuando colabora con Cloudinary",
    req.file
  )
  uptActors=[]

  if(actors){
    if(typeof actors === "string"){
      uptActors.push({name:actors})
    }else{
      actors.forEach(elm => {
        uptActors.push({name:elm})
      })
    }
  }

    Film.create({title,year,director,argument,place,actors:uptActors})
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

  let {title,year,director,argument,place,actors} = req.body

  uptActors=[]
  actors.forEach(elm => {
    uptActors.push({name:elm})
  });

  Film.findByIdAndUpdate(req.params.id, {title,year,director,argument,place,actors:uptActors})
  .then(x=> res.redirect(`/film/${req.params.id}`))
})

//------API REST ESCUPO JSON-------
router.get('/api', (req, res) => {
	Film.find()
		.then(allFilms => res.json(allFilms))
		.catch(err => console.log("yooooooooooooooo",err))
})

router.get('/api/:id', (req, res) => {
	Film.findById(req.params.id)
		.then(theRestaurant => res.json(theRestaurant))
		.catch(err => console.log(err))
})


//ESTOO LOOO ULTIMOOOOOO
router.get('/:id',(req,res) => {
  Film.findById(req.params.id)
  .then(theFilm => res.render('film/film-details', theFilm))
  .catch(err => console.log("Ha ocurrido un error",err))
  
})


module.exports = router