require('dotenv').config();

const express = require('express');
const router  = express.Router();

/* GET home page */
const secret = {SECRET:process.env.SECRET}
router.get('/', (req, res, next) => {
  res.render('index',secret);
});

module.exports = router;
