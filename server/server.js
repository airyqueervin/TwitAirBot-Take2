const express = require('express');
const router = require('./routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const twitKeys = require('../config/config.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/bundles', express.static(path.join(__dirname, '../bundles')));

app.use('/api', router);

app.get('/test', (req, res) => {
  res.send('Hello TwitAirBot is starting up soon!')
});

app.listen(PORT, () => {
  console.log(`Listening to TwitAirBot at port ${PORT}`);
});


// -------- Twitter Handling ------------
const twit = new Twitter({
  consumer_key: twitKeys.csKey, 
  consumer_secret: twitKeys.csSecret,
  access_token_key: twitKeys.accessToken,
  access_token_secret: twitKeys.accessTokenSecret
});

const latestMentions = [];
const idStrings = {};

const getMentions = () => {
  twit.get('statuses/mentions_timeline.json', { count: 10 })
    .catch(err => {
      console.log('caught error trying to get mentions tweets', err) 
    })
    .then(result => {
      result.forEach((tweet, i) => {
        if (i === 0) {
          idStrings[tweet.id_str] = true;
          let tweetObj = {
            id_string: tweet.id_str,
            user: tweet.user.screen_name,
            text: tweet.text,
            name: tweet.user.name
          };
          latestMentions.push(tweetObj);
        }
    })
  })
  .then(() => {
    console.log('LATEST MENTIONS', latestMentions);
  })
};

// getMentions();

const replyToMentions = () => {
  latestMentions.forEach(mention => {
    let responseTweet = `Hello @${mention.user} Your twit bot is working sir!
    -Your Fav TwitAirBot at your service`;
    twit.post('statuses/update', {status: responseTweet}, (err, tweet, res) => {
      if (err) {
        console.log('ERROR IN REPLY', err);
      } 
      console.log('reply tweet', tweet);
      // console.log('reply resposne', res);
      console.log('Succesful Response,', responseTweet);
    });
  });
};

module.exports.getMentions = getMentions;
module.exports.replyToMentions = replyToMentions;
