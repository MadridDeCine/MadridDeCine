const express = require("express");
const passport = require('passport');
const User = require("../models/user.model");
const ensureLogin = require("connect-ensure-login");
const router = express.Router();

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Cloudinary
const uploadCloud = require("../configs/cloudinary.config");


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/user",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  
  const { username, password, email} = req.body

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username })
        .then(user => {
            if (user) {
                res.render("auth/signup", { message: "El usuario ya existe" })
                return
            }

            const salt = bcrypt.genSaltSync(bcryptSalt)
            const hashPass = bcrypt.hashSync(password, salt)

            User.create({ username, password: hashPass, email})
              .then(user => {
                req.login(user, function(err) {
                if (err) { return next(err); }
                return res.redirect('/user');
              })})
              .catch(() => res.render("auth/signup", { message: "Something went wrong" }))
        })
        .catch(error => next(error))
        
});

router.get("/user",ensureLogin.ensureLoggedIn(),(req,res)=>{
  console.log(req.user)
  res.render("auth/auth-user",req.user)
})

router.get('/user/edit/:id',ensureLogin.ensureLoggedIn(),(req,res)=>{
  console.log(req.params.id)
  User.findById(req.params.id)
  // .populate()
  .then(theUser => {
    console.log(theUser)
    console.log(req.user)
    res.render('auth/auth-edit-user', theUser)})
  .catch(err => console.log("Ha ocurrido un error",err))
})

router.post('/user/edit/:id',uploadCloud.single("phototoupload"),(req,res)=>{
  console.log(
    "Y esto es lo que hace multer cuando colabora con Cloudinary",
    req.file
  )
  let {username,password,email} = req.body

  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password, salt)

  
  User.findByIdAndUpdate(req.params.id, {username,password:hashPass,email,path:req.file.secure_url})
  .then(x=> res.redirect('/user'))
  .catch(err => console.log(err))
})


router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});



module.exports = router;
