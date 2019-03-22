import React from 'react';
import MarkdownPage from './MarkdownPage';
import conductPath from '../documents/conduct.md';
import diversityPath from '../documents/diversity.md';
import parkingPath from '../documents/parking.md';
import sponsorPath from '../documents/sponsor.md';
import PropTypes from 'prop-types';

const routes = {
    "conduct" : conductPath,
    "diversity" : diversityPath,
    "parking" : parkingPath,
    "sponsor" : sponsorPath
}

const MarkdownRouter = (props) => {
    const path = routes[props.page]
    return <MarkdownPage source={path} />
}

MarkdownRouter.propTypes = {
    page: PropTypes.oneOf([
        'conduct', 'diversity', 'parking', 'sponsor'
    ])
}

export default MarkdownRouter