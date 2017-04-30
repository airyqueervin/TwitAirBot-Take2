const express = require('express');
const router = require('./routes.js');
const path = require('path');
const bodyParser = require('body-parser');
const Twitter = require('twitter');
const twitKeys = require('../config/config.js');
const axios = require('axios');

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

const getMentions = (message) => {
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
            name: tweet.user.name,
            screen_name: tweet.user.screen_name,
            text: tweet.text
          };
          latestMentions.push(tweetObj);
          replyToMentions(message);
        }
    })
  })
  .then(() => {
    axios.post('http://localhost:3000/api/tweets', latestMentions[0])
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    console.log('LATEST MENTIONS', latestMentions);
  })
};

const replyToMentions = (message) => {
  latestMentions.forEach(mention => {
    // let responseTweet = `Hello @${mention.user} ${message}
    let responseTweet = `Hello @airyque ${message}
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
