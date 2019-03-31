import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing.unit,
  },
});

const options = {
  overrides: {
    h1: { component: props => <Typography gutterBottom variant="h4" {...props} /> },
    h2: { component: props => <Typography gutterBottom variant="h6" {...props} /> },
    h3: { component: props => <Typography gutterBottom variant="subtitle1" {...props} /> },
    h4: { component: props => <Typography gutterBottom variant="caption" paragraph {...props} /> },
    p: { component: props => <Typography paragraph {...props} /> },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
    img: {
        component: props => {
            console.log("img", props)
            const {src, alt} = props;
            //const localPath = require(src)
            return <img src={src} alt={alt} />
        }
    }
  },
};

class MarkdownPage extends React.Component {
    constructor(props) {
        super(props)

        // destructure pass in props and remove 'children'
        let {children, ...passedProps} = this.props;
        // use state because we need to re-render after fetch
        this.state = { markdown: ""}
        this.passedProps = passedProps;
    }

    componentDidMount() {
        //var sourceUrl = require(this.props.source)
        fetch(this.props.source)
            .then((response) => response.text())
            .then((text) => {
                this.setState({ markdown: text})
            })
    }

    render() {
        return <ReactMarkdown options={options} {...this.passedProps} >
                {this.state.markdown}
              </ReactMarkdown>;
    }
}

MarkdownPage.propTypes = {
    source: PropTypes.string.isRequired
  };

export default MarkdownPage;