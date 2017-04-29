import React from 'react';
import Tweet from './Tweet.jsx';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br/>
        <strong>Tweets:</strong>
        {this.props.tweets.length ? this.props.tweets.map((tweet) => <Tweet key={Math.random() * 100000} tweet={tweet} />) : null}
      </div>
    )
  }
}

export default TweetList;
