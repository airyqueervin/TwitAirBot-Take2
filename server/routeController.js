const BotTweet = require('./db/BotTweet/BotTweet.js');
const db = require('./db/index.js');

const getTweets = (req, res) => {
  BotTweet.find()
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    console.error('Error retrieving BotTweet data from db: ', err);
    res.sendStatus(500);
  });
};

const addNewTweet = (req, res) => {
  const botTweet = new BotTweet({
    id_str: req.body.id_str,
    name: req.body.user.name,
    screen_name: req.body.user.screen_name,
    text: req.body.text
  });
  botTweet.save()
    .then(() => {
      getTweets(req, res);
    })
    .catch(err => {
      console.error('Error adding botTweet', err);
      res.status(501).send(err);
    });
}

module.exports.getTweets = getTweets;
module.exports.addNewTweet = addNewTweet;