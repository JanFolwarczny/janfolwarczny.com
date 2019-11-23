import React from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Anchor from "../components/Anchor";
import styles from "./index.module.css";
import Img from "gatsby-image/withIEPolyfill";
import BlogList from "../components/BlogList";

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
            description={`Minimalist, passionate in tech, startups, product, visual and sound design, photography and travelling. Entrepreneur experienced in designing and creating digital products. Endlessly curious.`}/>
        <p className={styles.heroParagraph}>
            {`Jan Folwarczny \u2014\u2014 Co-founder & Chief Product Officer of\u00A0`}
            <Anchor href={'https://kvikymart.com'}><b>KVIKYMART</b></Anchor>.
            <br/>
            {`
            Minimalist passionate in tech, startups, design, travelling and photography.
            Experienced in designing and creating digital products. Endlessly curious.
            `}
        </p>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} alt={`Jan Folwarczny`} className={'xxxx'}/>
        <nav className={styles.socialLinks}>
            <Anchor href={'https://www.facebook.com/Folwik'}>Facebook</Anchor>
            <Anchor href={'https://www.instagram.com/janfolwarczny'}>Instagram</Anchor>
            <Anchor href={'https://www.linkedin.com/in/janfolwarczny/'}>LinkedIn</Anchor>
            <Anchor href={'https://unsplash.com/@janfolwarczny'}>Unsplash</Anchor>
            <Anchor href={'https://www.pinterest.com/janfolwarczny'}>Pinterest</Anchor>
            <a href={'mailto:jan@janfolwarczny.com'}>E-mail</a>
            <Link to="/invoicing">Invoicing</Link>
        </nav>

        <BlogList/>

    </Layout>
};

export default IndexPage;
