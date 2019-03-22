import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({ 
    footer: {
      top: 'auto',
      bottom: 0,
    },
  });

class SiteFooter extends Component {
    
    render() {
        console.log(this.props)

        return (
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                     Footer
                </Typography>
            </footer>
        )
    }
}

export default withStyles(styles)(SiteFooter)