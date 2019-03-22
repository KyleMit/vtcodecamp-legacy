import React from 'react';
import MarkdownPage from './MarkdownPage'
import conductPath from '../documents/conduct.md'

const MarkdownRouter = () => {
    return <MarkdownPage source={conductPath} />
}


export default MarkdownRouter