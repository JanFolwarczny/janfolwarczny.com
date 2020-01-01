import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';
import {LinkUnderlined} from "../components/Link";
import Img from "gatsby-image/withIEPolyfill";
import BlogList from "../components/BlogList";
import {Parallax} from "react-scroll-parallax";
import styled from "styled-components";
import {BREAKPOINT_MIN_WIDTH} from "../components/breakpoint";
import SocialLinks from "../components/SocialLinks";
import Container, {CONTAINER_WIDTH} from "../components/Container";
import {FONT_WEIGHT} from "../components/font";

const HeroImage = styled(Img)`
    box-shadow: 0 0 8rem black;
`;

const HeroParalax = styled(Parallax)`
    padding: 30vh 0 30vh;
`;

const HeroParagraph = styled.p`
    font-size: 2rem;
    margin: 0;
    font-weight: ${FONT_WEIGHT.semibold};
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        font-size: 2.5rem;
    }
`;

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

        <Container>
            <HeroParalax y={[-50, 50]}>
                <HeroParagraph>
                    {`Jan Folwarczny \u2014 `}
                    {`Minimalist passionate in tech, startups, design, travelling and photography. `}
                    {`Experienced in designing and creating digital products. `}
                    {`Co-founder & Chief Product Officer of\u00A0`}<LinkUnderlined
                    href={'https://kvikymart.com'}><b>KVIKYMART</b></LinkUnderlined>.
                    <br/>
                    {`Endlessly curious.`}
                </HeroParagraph>
            </HeroParalax>
        </Container>

        <Container withPadding={false} maxWidth={CONTAINER_WIDTH.max1200}>
            <Parallax y={[50, -50]}>
                <HeroImage fluid={data.placeholderImage.childImageSharp.fluid} alt={`Jan Folwarczny`}/>
            </Parallax>
        </Container>

        <Container>
            <SocialLinks/>
            <BlogList/>
        </Container>

    </Layout>
};

export default IndexPage;
