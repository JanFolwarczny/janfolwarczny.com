import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import LinkOutside from "../components/LinkOutside";
import styles from "./index.module.css";
import Img from "gatsby-image/withIEPolyfill";

const IndexPage = () => {

    const data = useStaticQuery(graphql`{
                placeholderImage: file(relativePath: { eq: "20180412205702__DSF5979.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 960) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }`);

    return <Layout>
        <Head
            description={`Minimalist, passionate in tech, startups, product, visual and sound design, photography and travelling. Entrepreneur experienced in designing and creating digital products.`}/>
        <p className={styles.heroParagraph}>
            {`Jan Folwarczny \u2014\u2014 Co-founder & Chief Product Officer of\u00A0`}
            <LinkOutside to={'https://kvikymart.com'}><b>KVIKYMART</b></LinkOutside>.
            <br/>
            {`
            Minimalist passionate in tech, startups, design, travelling and photography.
            Experienced in designing and creating digital products.
            `}
        </p>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={`Jan Folwarczny`}/>
        <ul className={styles.socialLinks}>
            <li><LinkOutside to={'https://www.facebook.com/Folwik'}>Facebook</LinkOutside></li>
            <li><LinkOutside to={'https://www.instagram.com/janfolwarczny'}>Instagram</LinkOutside></li>
            <li><LinkOutside to={'https://www.linkedin.com/in/janfolwarczny/'}>LinkedIn</LinkOutside></li>
            <li><LinkOutside to={'https://unsplash.com/@janfolwarczny'}>Unsplash</LinkOutside></li>
            <li><LinkOutside to={'https://www.pinterest.com/janfolwarczny'}>Pinterest</LinkOutside></li>
            <li><a href={'mailto:jan@janfolwarczny.com'}>E-mail</a></li>
            <li><Link to="/invoicing">Invoicing</Link></li>
        </ul>
    </Layout>
};

export default IndexPage
