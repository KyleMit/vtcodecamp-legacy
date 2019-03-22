import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SiteNavBar from './components/SiteNavBar';
import SiteFooter from './components/SiteFooter';
import { withStyles } from '@material-ui/core';


const styles = theme => ({ 
  content: {
    marginTop: `${theme.spacing.unit * 8}px`,
  },
});

class App extends Component {


  render() {
    return (
      <div className="App">

      <Router>
        <SiteNavBar />

        <main className={this.props.classes.content}>

        

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
          <Route path="/conduct/" component={MarkdownRouter} />

          </main>

          <SiteFooter />
      </Router>

 
      </div>
    );
  }
}

export default withStyles(styles)(App);
