import { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>Hello From TwitAirBot React page</div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('main'));
