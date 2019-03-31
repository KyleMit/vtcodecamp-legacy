import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import SiteHead from './components/SiteHead';
import SiteNavBar from './components/SiteNavBar';
import SiteFooter from './components/SiteFooter';
import { withStyles } from '@material-ui/core';
import SiteRouter from './components/SiteRouter';
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = theme => {
  console.log(theme)
  return ({
  content: {
    marginTop: `${theme.spacing.unit * 8}px`,
  },
  app: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100vh'
  }
})

};

class App extends Component {


  render() {
    return (
      <div id="app" className={this.props.classes.app}>
        <CssBaseline />
        <SiteHead />
        <Router>

          <SiteNavBar />

          <main className={this.props.classes.content}>

            <SiteRouter />

          </main>

          <SiteFooter className={this.props.classes.footer} />
        </Router>


      </div>
    );
  }
}

export default withStyles(styles)(App);
