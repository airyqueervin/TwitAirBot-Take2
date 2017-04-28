const mongoose = require('mongoose');
const db = require('../index.js');

const Tweet = mongoose.model('Tweet', {
  username: String,
  text: String
});

module.exports = Tweet;