import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Welcome to TwitAirBot!</h1>
        <App />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
