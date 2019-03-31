import React, { Component } from "react";
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom'
import { Typography, IconButton, SvgIcon, Divider } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
// import TwitterIcon from '@mdi/svg/svg/twitter'
import { mdiTwitterCircle, mdiMeetup, mdiGithubCircle } from '@mdi/js'







const styles = theme => ({
    footer: {
        padding: '15px',
        textAlign: 'center',
    },
    footerNav: {
        display: 'flex',
        '& > * ': {
            flex: '1 1 auto',
         }
    },
    unstyledList: {
        listStyle: "none"
    },
    iconPanel: {
        alignSelf: 'center'
    },
    copywrite: {
        margin: '8px'
    }
});

class SiteFooter extends Component {
    
    render() {
        return (
            <footer className={this.props.classes.footer}>

                <Divider />

                <nav className={this.props.classes.footerNav}>
                    <ul className={this.props.classes.unstyledList}>
                        <li>
                        <Typography variant="h6" >Pages</Typography>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/parking/">Parking</Link>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/sponsor/">Sponsor</Link>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/community/">Community</Link>
                        </li>
                    </ul>
                    <ul className={this.props.classes.unstyledList}>
                        <li>
                        <Typography variant="h6" >Standards</Typography>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/conduct/">Conduct</Link>
                        </li>
                        <li>
                            <Link component={RouterLink} to="/diversity/">Diversity</Link>
                        </li>
                    </ul>
                </nav>

                <div className={this.props.classes.iconPanel}>
                    <IconButton
                        href="http://twitter.com/VTCodeCamp"
                        target="_blank" rel="noopener"
                        aria-label="twitter">
                        <SvgIcon>
                            <path d={mdiTwitterCircle} />
                        </SvgIcon>
                    </IconButton>

                    <IconButton
                        href="https://www.meetup.com/VTCode/"
                        target="_blank" rel="noopener"
                        aria-label="twitter">
                        <SvgIcon>
                            <path d={mdiMeetup} />
                        </SvgIcon>
                    </IconButton>

                    <IconButton
                        href="https://github.com/vtcodecamp/vtcodecamp-legacy/tree/react"
                        target="_blank" rel="noopener"
                        aria-label="twitter">
                        <SvgIcon>
                            <path d={mdiGithubCircle} />
                        </SvgIcon>
                    </IconButton>
                </div>
            
                <Typography variant="body1" className={this.props.classes.copywrite} >
                    &copy; {(new Date()).getFullYear()} Vermont Code Camp
                    <span> | </span>
                    <Link href="mailto:info@vtcodecamp.org">
                        info@vtcodecamp.org
                    </Link>
                </Typography>
            </footer>
        )
    }
}

export default withStyles(styles)(SiteFooter)