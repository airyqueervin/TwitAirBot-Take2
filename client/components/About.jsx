import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="jumbotron">
        <h2>About</h2>
        <p> Here is a cool way for me to automate my twitter responses. Yay this is going to be great!!</p>
      </div>
    );
  }
}

export default About;