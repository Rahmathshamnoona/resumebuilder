var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.psw);

  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.psw
    });
    await newUser.save()
    res.send("Signup successfull");
  } catch (err) {
    console.log(err);
    res.send("Server error");
  }

});

module.exports = router;
