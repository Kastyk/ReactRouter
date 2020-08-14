import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Users from './Users';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/1">About</Link>
            </li>
            <li>
              <Link to="/users/7">Users</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about/:id" component={About} />
          <Route path="/users/:id" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
