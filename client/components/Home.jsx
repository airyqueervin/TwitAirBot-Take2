import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.runBot = this.runBot.bind(this);
    this.stopBot = this.stopBot.bind(this);
    this.sendTweet = this.sendTweet.bind(this);
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

  

  render() {
    return (
      <div>
       <h2>Live Home Component</h2>
        <form onSubmit={this.handleSubmit}>
          What do you want your bot to say?<br/>          
          <input type="text" placeholder="Enter A Friednly Tweet" value={this.state.value} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
        <br/>
        <button onClick={ () => {this.sendTweet(this.state.value)} }>Send Single Tweet</button>
        <button onClick={this.stopBot}>Stop Bot</button>
        <button onClick={this.runBot}>Start Auto Tweet</button>
      </div>
    );
  }
}

export default Home;