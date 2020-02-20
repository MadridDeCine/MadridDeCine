const express = require('express')
const router = express.Router()

const Met = require('../models/meeting.model')
const User = require('../models/user.model')
const uploadCloud = require("../configs/cloudinary.config")
const ensureLogin = require("connect-ensure-login")



router.get('/',ensureLogin.ensureLoggedIn(),(req,res) => {
  Met.find()
  .then(theMets => res.render('met/met-index',{mets:theMets}))
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.get('/new',(req,res) => res.render('met/met-new'))

router.post('/new',uploadCloud.single("phototoupload"),(req,res) => {

let {name,description,place,date,hour} = req.body

let metId
 
  Met.create({name,description,place,hour,date,path:req.file.secure_url,user:req.user._id})
      .then(theMet => metId=theMet._id)
      .then(x => {
        let addMeeting = {$push:{meeting:metId}}
        User.findByIdAndUpdate(req.user._id,addMeeting)
        .then(x=>res.redirect('/met'))
        .catch(err=>console.log(err))
      })
      .catch(err => console.log("Ha ocurrido un error creando encuentros en la base de datos",err))

      
      
})

router.get('/:id',(req,res) => {
  Met.findById(req.params.id)
  .populate('user')
  .then(theMet => {
    res.render('met/met-details', theMet)
  })
  .catch(err => console.log("Ha ocurrido un error",err))
  
})

router.get('/delete/:id',(req,res) => {

  Met.findByIdAndDelete(req.params.id)
  .then(x => res.redirect('/met'))
  .catch(err => console.log("Ha ocurrido un error creando encuentros en la base de datos",err))
})

router.get('/edit/:id',(req,res)=>{
Met.findById(req.params.id)
.then(theMet => res.render('met/met-edit', theMet))
.catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/edit/:id',uploadCloud.single("phototoupload"),(req,res)=>{

let {name,description,hour,date,place} = req.body


Met.findByIdAndUpdate(req.params.id, {name,description,hour,place,date,path:req.file.secure_url})
.then(x=> res.redirect(`/met/${req.params.id}`))
.catch(err => console.log("Ha ocurrido un error",err))

})

router.post('/addParticipant/:id',(req,res)=>{
  let userId = req.user._id
  console.log("hola :)")

  let metParticipants = {
    $push:{
      user:userId
    }
  }

  let addMeeting = {
    $push:{
      meeting:req.params.id
    }
  }

  User.findByIdAndUpdate(req.userId,addMeeting)
  Met.findByIdAndUpdate(req.params.id,metParticipants)
  .then(res.redirect(`/met/${req.params.id}`))
  .catch(err => console.log("error",err))

  
})

module.exports = router