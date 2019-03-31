import React, {Component} from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'

class SiteNavBar extends Component {

    render() {
        return (
            <AppBar position="absolute" >
                <Toolbar color="">
                    <Typography variant="h5" color="inherit" >
                        <Link component={RouterLink} to="/" color="inherit">
                            &lt; Vermont Code Camp &gt;
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

export default SiteNavBar