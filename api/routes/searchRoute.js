const express = require('express'),
  search = require('../controllers/searchController'),
  router = express.Router();

router.post('/', search.controller);

module.exports = router