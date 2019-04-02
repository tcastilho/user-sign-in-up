const express = require('express'),
  signin = require('../controllers/signinController'),
  router = express.Router();

router.post('/', signin.controller);

module.exports = router