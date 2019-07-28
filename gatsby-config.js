module.exports = {
    siteMetadata: {
        siteUrl: process.env.SITE_URL,
        siteTitle: `Jan Folwarczny`,
        defaultTitle: `Jan Folwarczny \u2014\u2014 Co-founder & CPO at KVIKYMART, Technology Entrepreneur, Designer, Traveller, Photographer`,
        titleTemplate: `%s \u2014\u2014 janfolwarczny.com`,
        author: `@janfolwarczny`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-remove-trailing-slashes`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jan Folwarczny`,
                short_name: `JF`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/images/20180412205702__DSF5979_closeup.jpg`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`postcss-preset-env`)({
                        stage: 2,
                        browsers: '< 1%'
                    })
                ],
            },
        },
        {
            resolve: `gatsby-plugin-gtag`,
            options: {
                trackingId: `UA-35799358-1`,
                head: true,
                anonymize: true,
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
        // gatsby-plugin-react-svg
        // gatsby-plugin-google-tagmanager
        // https://www.gatsbyjs.org/packages/gatsby-plugin-layout/?=
        // https://www.gatsbyjs.org/packages/gatsby-source-instagram/?=
        // https://www.gatsbyjs.org/packages/gatsby-remark-external-links/?=
        // https://www.gatsbyjs.org/packages/gatsby-background-image/?=
        // https://www.gatsbyjs.org/packages/gatsby-plugin-eslint/?=
        // https://www.gatsbyjs.org/packages/gatsby-plugin-sentry/?=
        // https://www.gatsbyjs.org/packages/gatsby-plugin-mailchimp/?=
        // https://www.gatsbyjs.org/packages/gatsby-plugin-s3/?=
    ],
};
