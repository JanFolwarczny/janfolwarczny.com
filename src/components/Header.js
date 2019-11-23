import {graphql, Link, StaticQuery} from 'gatsby'
import React from 'react'
import styles from './Header.module.css';
import Anchor from "./Anchor";


const Header = () => (
    <StaticQuery
        query={graphql`
            {
                site {
                    siteMetadata {
                        siteTitle
                    }
                }
            }
        `}
        render={data => (
            <header className={styles.container}>
                <h1 className={styles.heading}>
                    <Link to="/" className={styles.headingLink}>
                        {data.site.siteMetadata.siteTitle}
                    </Link>
                </h1>
                <Anchor href={'https://m.me/Folwik'}>Write me</Anchor>
            </header>
        )}
    />
);


export default Header;
