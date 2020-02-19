const express = require('express')
const router = express.Router()

const Film = require('../models/film.model')
const User = require('../models/user.model')
const ensureLogin = require("connect-ensure-login")

const uploadCloud = require("../configs/cloudinary.config")

// Aquí los endpoints

router.get('/',(req,res) => {
    Film.find()
    .then(theFilms => res.render('film/film-index',{films:theFilms}))
    .catch(err => console.log("Ha ocurrido un error",err))
    })

router.get('/new',(req,res) => res.render('film/new-film'))

router.post('/new',uploadCloud.single("phototoupload"),uploadCloud.single("phototoupload2"),(req,res) => {

  let {title,year,director,argument,place,actors} = req.body
  
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
  .then(theFilm => res.render('film/edit-film', theFilm))
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/edit/:id',(req,res)=>{

  let {title,year,director,argument,place,actors} = req.body

  uptActors=[]
  actors.forEach(elm => {
    uptActors.push({name:elm})
  })

  Film.findByIdAndUpdate(req.params.id, {title,year,director,argument,place,actors:uptActors})
  .then(x=> res.redirect(`/film/${req.params.id}`))
  .catch(err=>console.log(err))

})

router.post('/addFavorite/:id',ensureLogin.ensureLoggedIn(), (req, res) => {

  let addfavs = {$push:{favs:req.params.id}}
  
    User.findByIdAndUpdate(req.user._id,addfavs)
      .then(x=>res.redirect('/user'))
      .catch(err=>console.log(err))
    })

//------API REST ESCUPO JSON-------
router.get('/api', (req, res) => {
	Film.find()
		.then(allFilms => res.json(allFilms))
		.catch(err => console.log("yooooooooooooooo",err))
})

router.get('/api/:id', (req, res) => {
	Film.findById(req.params.id)
		.then(theFilm => res.json(theFilm))
		.catch(err => console.log(err))
})


//ESTOO LOOO ULTIMOOOOOO
router.get('/:id',(req,res) => {
  Film.findById(req.params.id)
  .populate('suggestion')
  .then(theFilm => res.render('film/film-details', theFilm))
  .catch(err => console.log("Ha ocurrido un error",err))
  
})


module.exports = router