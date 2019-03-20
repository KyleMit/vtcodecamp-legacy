import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ConductPage from './pages/ConductPage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {


  render() {
    return (
      <div className="App">

      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/conduct/">Conduct</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={HomePage} />
          <Route path="/conduct/" component={ConductPage} />
        </div>
      </Router>

 
      </div>
    );
  }
}

export default App;
