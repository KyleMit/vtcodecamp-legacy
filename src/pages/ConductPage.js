import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import ConductDocumentPath from '../documents/conduct.md'



class ConductPage extends Component {
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
      <div className="Conduct">

        <ReactMarkdown source={this.state.conduct} />

      </div>
    );
  }
}

export default ConductPage;
