const express = require('express');
const router = express.Router();
const routeCtrl = require('./routeController');

router.get('/tweets', routeCtrl.getTweets);

module.exports = router;