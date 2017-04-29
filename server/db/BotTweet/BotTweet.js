const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const botTweetSchema = new Schema({
  id_str: String,
  name: String,
  screen_name: String,
  text: String,
  user: String
});

module.exports = mongoose.model('BotTweet', botTweetSchema);
