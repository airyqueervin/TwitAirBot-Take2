import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1 id="title">Welcome to TwitAirBot</h1>
        <Nav pills className="well well-sm">
          <NavItem className="navItem home">
            <NavLink><Link to="/home">Home</Link></NavLink>
          </NavItem>
          <NavItem className="navItem about">
            <NavLink><Link to="/about">About</Link></NavLink>
          </NavItem>
        </Nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;