import React from 'react';
import Twitter from 'twitter';
import twitKeys from '../../config/config.js';


class TwitBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {twit: new Twitter({
        consumer_key: twitKeys.csKey, 
        consumer_secret: twitKeys.csSecret,
        access_token_key: twitKeys.accessToken,
        access_token_secret: twitKeys.accessTokenSecret
      })
    };
    this.latestMentions = [];
    this.idStrings = {};

    this.getMentions = this.getMentions.bind(this);
    this.replyToMentions = this.replyToMentions.bind(this);
  }

  getMentions() {
    this.state.twit.get('statuses/mentions_timeline.json', { count: 10 }, (err, data, res) => {
      if (err) {
        console.log('ERROR OCCURED WITH TWIT GET', err);
      }
      data.forEach((tweet, i) => {
        if (i === 0) {
          this.idStrings[tweet.id_str] = true;
          let tweetObj = {};
          tweetObj.user = tweet.user.screen_name;
          tweetObj.text = tweet.text;
          this.latestMentions.push(tweetObj);
          // replyToMentions();  
        } else {
          console.log('Twitter Data', data);
        }
      });
      console.log('ID STRINGS', this.idStrings);
      console.log('LATEST MENTIONS', this.latestMentions);
    });
  }

  replyToMentions() {
    this.latestMentions.forEach(mention => {
    let responseTweet = `Hello @${mention.user} Your twit bot is working sir!
      -Your Fav TwitAirBot at your service`;
      this.state.twit.post('statuses/update', {status: responseTweet}, (err, tweet, res) => {
        if (err) {
          console.log('ERROR IN REPLY', err);
        } 
        console.log('reply tweet', tweet);
        // console.log('reply resposne', res);
        console.log('Succesful Response,', responseTweet);
      });
    });
  }

  render() {
    return (
      <div>TwitAirBot Component</div>
    );
  }
}

export default TwitBot;