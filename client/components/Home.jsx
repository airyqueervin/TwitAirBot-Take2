import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.runBot = this.runBot.bind(this);
    this.stopBot = this.stopBot.bind(this);
    this.sendTweet = this.sendTweet.bind(this);
  }

  handleSubmit() {
    console.log('Submit is being handled');
  }

  runBot() {
    console.log('run was clicked');
  }

  sendTweet(val) {
    alert(`This message is set: ${val}`);
  }

  stopBot() {
    console.log('stop was clicked');
  }

  

  render() {
    return (
      <div>
       <h2>Live Home Component</h2>
        <form>
          What do you want your bot to say?<br/>          
          <input type="text" placeholder="Enter A Friednly Tweet" onChange={this.handleSubmit} />
          <input type="submit"/>
        </form>
        <br/>
        <button onClick={ this.sendTweet }>Send Single Tweet</button>
        <button onClick={ this.stopBot }>Stop Bot</button>
        <button onClick={ this.runBot }>Start Auto Tweet</button>
      </div>
    );
  }
}

export default Home;