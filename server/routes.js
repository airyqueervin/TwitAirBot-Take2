const express = require('express');
const router = express.Router();
const routeCtrl = require('./routeController');

router.get('/tweets', routeCtrl.getTweets);

router.post('/tweets', routeCtrl.addNewTweet);

module.exports = router;