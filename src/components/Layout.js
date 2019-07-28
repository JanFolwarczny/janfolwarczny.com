import React from 'react';
import PropTypes from 'prop-types';
import {graphql, useStaticQuery} from 'gatsby';
import Header from './Header';
import styles from './Layout.module.css';
import BackgroundImage from 'gatsby-background-image'


const Layout = ({children}) => {
    const img = useStaticQuery(graphql`{
                file(relativePath: { eq: "20180524091350_FXE31773_wallpaper.jpg" }) {
                    childImageSharp {
                        fluid(quality: 80, maxWidth: 2560) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }`);

    return <>
        <BackgroundImage Tag="div" className={styles.background} fluid={img.file.childImageSharp.fluid}/>
        <Header/>
        <main className={styles.main}>
            {children}
        </main>
    </>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
