const express = require('express');
const router = express.Router();
const home = require('../controllers/homeController');
const logs = require('../logs/logs')

router.get('/',logs, home.lobby);

module.exports = router