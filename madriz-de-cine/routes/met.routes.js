const express = require('express')
const router = express.Router()

const Met = require('../models/meeting.model')
const uploadCloud = require("../configs/cloudinary.config");


router.get('/',(req,res) => {
  Met.find()
  .then(theMets => res.render('met/met-index',{mets:theMets}))
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.get('/new',(req,res) => res.render('met/met-new'))

router.post('/new',uploadCloud.single("phototoupload"),(req,res) => {

let {name,description,place,date,hour} = req.body
 console.log(date)


console.log(
  "Y esto es lo que hace multer cuando colabora con Cloudinary",
  req.file
)

  Met.create({name,description,place,hour,date,path:req.file.secure_url})
      .then(theMet => res.redirect('/met/new'))
      .catch(err => console.log("Ha ocurrido un error creando parques en la base de datos",err))
})

router.get('/:id',(req,res) => {
  Met.findById(req.params.id)
  .then(theMet => res.render('met/met-details', theMet))
  .catch(err => console.log("Ha ocurrido un error",err))
  
})

router.get('/delete/:id',(req,res) => {

  Met.findByIdAndDelete(req.params.id)
  .then(x => res.redirect('/met'))
  .catch(err => console.log("Ha ocurrido un error creando parques en la base de datos",err))
})

router.get('/edit/:id',(req,res)=>{
Met.findById(req.params.id)
.then(theMet => {
  console.log(theMet)
  res.render('met/met-edit', theMet)})
.catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/edit/:id',uploadCloud.single("phototoupload"),(req,res)=>{

let {name,description,hour,date,place} = req.body


Met.findByIdAndUpdate(req.params.id, {name,description,hour,place,date,path:req.file.secure_url})
.then(x=> res.redirect(`/met/${req.params.id}`))
})

module.exports = router