const BotTweet = require('./db/BotTweet/BotTweet.js');
const db = require('./db/index.js');

const getTweets = function(req, res) {
  BotTweet.find({tweet: req.query.tweet})
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.error('Error retrieving BotTweet data from db: ', err);
    res.sendStatus(500);
  });
};

module.exports.getTweets = getTweets;