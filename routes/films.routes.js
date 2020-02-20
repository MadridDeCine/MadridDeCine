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

router.get('/new',ensureLogin.ensureLoggedIn(),(req,res) => res.render('film/new-film'))

router.post('/new',uploadCloud.array("phototoupload"),(req,res) => {

  let {title,year,director,argument,place,actors,placeName,placeLat,placeLng, genre, country, duration} = req.body
  
  let coords,poster,image
  
  coords={
    lat:req.body.lat,
    lng:req.body.lng
  }

  poster = req.files[0].secure_url
  image = req.files[1].secure_url

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
  
  let arrPlaces = []
  if(placeName&&placeLat&&placeLng){
    if(typeof placeName === "string"){
      arrPlaces.push({name:placeName,lat:placeLat,lng:placeLng})
    }else{
      for(let i = 0;i<placeName.length;i++){
        let obj = {}
        obj.name = placeName[i]
        obj.lat= placeLat[i]
        obj.lng= placeLng[i]
        console.log("Soy el objeto antes de ser pusheado",obj)
        arrPlaces.push(obj)
      }
    }
    console.log("Holaaaa",arrPlaces)
  }

  Film.create({title,year,director,argument,place,actors:uptActors,coords,poster,image,morePlaces:arrPlaces, genre, country, duration})
      .then(theFilm => {console.log(theFilm);res.redirect('/film/new')})
      .catch(err => console.log("Ha ocurrido un error creando peliculas en la base de datos",err))
})

router.get('/delete/:id',ensureLogin.ensureLoggedIn(),(req,res) => {

    Film.findByIdAndDelete(req.params.id)
    .then(x => res.redirect('/film'))
    .catch(err => console.log("Ha ocurrido un error borrando peliculas en la base de datos",err))
})

router.get('/edit/:id',ensureLogin.ensureLoggedIn(),(req,res)=>{
  Film.findById(req.params.id)
  .then(theFilm => res.render('film/edit-film', theFilm))
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/edit/:id',uploadCloud.array("phototoupload"),(req,res)=>{

  let {title,year,director,argument,place,actors, genre, country, duration} = req.body
  console.log("soy multer-------",req.files)
  let coords,poster,image
  
  coords={
    lat:req.body.lat,
    lng:req.body.lng
  }

  poster = req.files[0].secure_url
  image = req.files[1].secure_url

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

  Film.findByIdAndUpdate(req.params.id, {title,year,director,argument,place,actors:uptActors,coords,poster,image, genre, country, duration})
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
		.catch(err => console.log("Ha ocurrido un error",err))
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