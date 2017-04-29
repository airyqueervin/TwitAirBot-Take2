import React from 'react';
import axios from 'axios';
import TweetList from './TweetList.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      tweets: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.runBot = this.runBot.bind(this);
    this.stopBot = this.stopBot.bind(this);
    this.sendTweet = this.sendTweet.bind(this);

    this.getTweets = this.getTweets.bind(this);
    this.getTweets();
  }

  handleChange(e) {
    console.log('Submit is being handled');
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert(`A message was submitted: ${this.state.value}`);
    e.preventDefault();
  }

  runBot() {
    console.log('run was clicked');
  }

  sendTweet(val) {
    alert(`This message was sent: ${val}`);
  }

  stopBot() {
    console.log('stop was clicked');
  }

  getTweets() {
    axios.get('/api/tweets')
      .then(({ data }) => {
        this.setState({
          tweets: data
        });
      })
      .catch(err => {
        console.error("Fucking thing failed", err);
      });
  }

  

  render() {
    return (
      <div>
       <h2>Home Of The T.A.B</h2>
        <form onSubmit={this.handleSubmit}>
          What do you want your bot to say?<br/>          
          <input type="text" placeholder="Enter A Friednly Tweet" value={this.state.value} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
        <br/>
        <button onClick={ () => {this.sendTweet(this.state.value)} }>Send Single Tweet</button>
        <button onClick={this.runBot}>Start Auto Tweet</button>
        <button onClick={this.stopBot}>Stop Bot</button>
        <TweetList tweets={this.state.tweets} />
      </div>
    );
  }
}

export default Home;