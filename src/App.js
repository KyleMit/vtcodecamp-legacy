import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage'
import ReactMarkdown from 'react-markdown';
import ConductDocumentPath from './documents/conduct.md'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(ConductDocumentPath)
      .then((response) => response.text())
      .then((text) => {this.setState({ conduct: text })
    })
  }

  render() {
    return (
      <div className="App">

        <HomePage />

        <ReactMarkdown source={this.state.conduct} />

      </div>
    );
  }
}

export default App;
