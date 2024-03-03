const express = require('express');
const router = express.Router();
const controller= require('../controllers/meals_controller');

/* GET home page. */
router.get('/', controller.meals);

module.exports = router;