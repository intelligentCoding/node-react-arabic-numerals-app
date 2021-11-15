const express = require('express');
const HttpError = require('../models/http-error');
const router = express.Router();
const numeralController = require('../controllers/numerals-controller');



router.get('/:value/:type', numeralController.convertNumeral);;


module.exports = router;