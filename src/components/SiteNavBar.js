import React, {Component} from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class SiteNavBar extends Component {

    render() {
        return (
            <AppBar position="absolute" >
                <Toolbar color="">
                    <Typography variant="h5" color="inherit" >
                        &lt; Vermont Code Camp &gt;
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default SiteNavBar