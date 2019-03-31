import React from "react";
import {Helmet} from "react-helmet";

class SiteHead extends React.Component {
  render () {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <link rel="canonical" href="https://vtcodecamp.netlify.com/" />

             {/* Primary Meta Tags  */}
            <title>Free Code Camp in Burlington, VT</title>
            <meta name="title" content="Free Code Camp in Burlington, VT"/>
            <meta name="description" content="Vermont Code Camp is an annual developer conference held each fall in Burlington, VT.  We welcome developers of all groups, orientations, and levels of experience."/>

             {/* Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://vtcodecamp.netlify.com/"/>
            <meta property="og:title" content="Free Code Camp in Burlington, VT"/>
            <meta property="og:description" content="Vermont Code Camp is an annual developer conference held each fall in Burlington, VT.  We welcome developers of all groups, orientations, and levels of experience."/>
            <meta property="og:image" content="https://vtcodecamp.netlify.com/assets/preview.png"/>

             {/* Twitter  */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://vtcodecamp.netlify.com/"/>
            <meta property="twitter:title" content="Free Code Camp in Burlington, VT"/>
            <meta property="twitter:description" content="Vermont Code Camp is an annual developer conference held each fall in Burlington, VT.  We welcome developers of all groups, orientations, and levels of experience."/>
            <meta property="twitter:image" content="https://vtcodecamp.netlify.com/assets/preview.png"/>

        </Helmet>
    );
  }
};

export default SiteHead;