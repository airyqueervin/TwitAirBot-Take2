const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const botTweetSchema = new Schema({
  text: String,
  userHandle: String,
  tweet: String
});

module.exports = mongoose.model('BotTweet', botTweetSchema);
