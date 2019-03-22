import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import ConductDocumentPath from '../documents/conduct.md'

function Link(props) {
  return <a href={props.href} className="my-link-class">{props.children}</a>
}

function BlockQuote(props) {
  return <blockquote className="my-block-quote">{props.children}</blockquote>
}

const renderers = {
  Link: Link, 
  BlockQuote: BlockQuote
}


class ConductPage extends Component {
  constructor(props) {
    super(props)

    this.state = { conduct: null }
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

        <ReactMarkdown 
          source={this.state.conduct}
          renderers={renderers} />

      </div>
    );
  }
}

export default ConductPage;
