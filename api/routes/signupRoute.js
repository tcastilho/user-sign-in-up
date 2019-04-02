const express = require('express'),
  signup = require('../controllers/signupController'),
  router = express.Router();

router.post('/', signup.controller);

module.exports = router