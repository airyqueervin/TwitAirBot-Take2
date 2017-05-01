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
        <button className="btn btn-info" onClick={this.props.getTweets}>Get Activity Log</button>
        {this.props.tweets.length ? this.props.tweets.map((tweet) => <Tweet key={Math.random() * 100000} tweet={tweet} />) : null}
      </div>
    )
  }
}

export default TweetList;
