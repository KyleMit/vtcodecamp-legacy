import React, { Component } from 'react';
import { Route } from "react-router-dom";

import HomePage from '../pages/HomePage'
import MarkdownRouter from "../pages/MarkdownRouter";
import CommunityPage from '../pages/CommunityPage'

class SiteRouter extends Component {

    render() {
        return (
            <>
                <Route path="/" exact component={HomePage} />
                <Route path="/community/" component={CommunityPage} />
                <Route path="/conduct/" render={(props) => <MarkdownRouter {...props} page='conduct' />} />
                <Route path="/diversity/" render={(props) => <MarkdownRouter {...props} page='diversity' />} />
                <Route path="/parking/" render={(props) => <MarkdownRouter {...props} page='parking' />} />
                <Route path="/sponsor/" render={(props) => <MarkdownRouter {...props} page='sponsor' />} />
            </>
        )
    }
}

export default SiteRouter;