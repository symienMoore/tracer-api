var express = require('express');
var router = express.Router();
const controller = require('../controllers/user.controller.js');

/* GET users listing. */
router.post('/api/register', controller.registerUser);

module.exports = router;
