import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import CalendarToday from '@material-ui/icons/CalendarToday'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Typography variant="h3" gutterBottom>
          About the Event
        </Typography>

        <Typography variant="body1" gutterBottom>
          The upcoming 11th annual Vermont Code Camp will be held on Saturday, September 28, 2019 in Burlington, Vermont.
        </Typography>


        <Button variant="contained" color="primary">
          Sign Up On Meetup
        </Button>

        <CalendarToday />
      </div>
    );
  }
}

export default App;
