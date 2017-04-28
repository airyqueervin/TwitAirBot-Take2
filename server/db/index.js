const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/twitairbot');

module.exports = connection;