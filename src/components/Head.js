import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

const Head = ({description, lang, meta, title}) => {

    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              siteTitle,
              defaultTitle,
              titleTemplate,
              author
            }
          }
        }`);

    const metaDescription = description || '';
    const metaTitle = title || data.site.siteMetadata.defaultTitle;


    return <Helmet
        htmlAttributes={{lang}}
        title={title}
        titleTemplate={data.site.siteMetadata.titleTemplate}
        defaultTitle={data.site.siteMetadata.defaultTitle}
        meta={meta}>

        <meta name="description" content={metaDescription}/>
        <meta name="author" content={data.site.siteMetadata.author}/>

        {/* Application */}
        <meta name="application-name" content={data.site.siteMetadata.author}/>
        <meta name="apple-mobile-web-app-title" content={data.site.siteMetadata.author}/>
        <meta name="msapplication-TileColor" content="#000000"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="format-detection" content="telephone=no"/>

        {/* Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        {/* Open Graph */}
        <meta property="og:title" content={metaTitle}/>
        <meta property="og:description" content={metaDescription}/>
        <meta property="og:type" content={'website'}/>
        {/*<meta property="og:image" content={url + ogImage} />*/}

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:creator" content={data.site.siteMetadata.author}/>
        <meta name="twitter:title" content={metaTitle}/>
        <meta name="twitter:description" content={metaDescription}/>
        {/*<meta name="twitter:image" content={url + ogImage} />*/}
    </Helmet>
};

Head.defaultProps = {
    lang: `en`,
    meta: [],
    title: ``
};

Head.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string,
};

export default Head;
