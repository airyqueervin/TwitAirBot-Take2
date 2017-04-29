const BotTweet = require('./BotTweet/BotTweet.js');
const db = require('./index.js');
const data = require('./../../data.json');

BotTweet.remove({}).then(function() {
  var i = 0;
  data.forEach(function(tweet) {
    BotTweet.create(tweet)
    .then(function() {
      console.log('Successfully seeded tweet ' + tweet.screen_name + ' data into database');
    })
    .then(function() {
      i++;
      if (i === data.length) {
        process.exit();
      }
    })
    .catch(function(err) {
      console.log('ERROR seeding level into db: ', err);
    });
  });
});