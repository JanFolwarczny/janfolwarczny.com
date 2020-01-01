import {graphql, Link, StaticQuery} from 'gatsby'
import React from 'react'
import PropTypes from "prop-types";
import {LinkUnderlined} from "./Link";
import styled, {css} from "styled-components";
import {BREAKPOINT_MIN_WIDTH} from "./breakpoint";
import {FONT_WEIGHT} from "./font";
import Container, {CONTAINER_WIDTH} from "./Container";


const HeaderContainer = styled(Container)`
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    transition-property: filter, opacity;
    transition-duration: .5s;
    filter: blur(0);
    ${props => props.suppress && css`
        filter: blur(5px);
        opacity: .5;
    `}
`;

const HeaderH1 = styled.h1`
    text-transform: uppercase;
    margin: 0;
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1rem;
    user-select: none;
    font-size: 1rem;
    letter-spacing: .15em;
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        font-size: 1.2rem;
    }
`;

const HeaderH1Link = styled(Link)`
    color: white;
    text-decoration: none;
    display: inline-block;
    position: relative;
    &:after {
        content: '';
        height: 2px;
        background-color: white;
        opacity: 0;
        position: absolute;
        left: 0;
        bottom: -.75rem;
        width: calc(100% - .5em);
        transform: translateY(2rem);
        transition: opacity .5s, transform .5s;
    }
    &:hover:after {
        opacity: 1;
        transform: translateY(0);
    }
`;

const Header = (props) => (
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
            <HeaderContainer suppress={props.suppress} maxWidth={CONTAINER_WIDTH.full}>
                <HeaderH1>
                    <HeaderH1Link to="/">
                        {data.site.siteMetadata.siteTitle}
                    </HeaderH1Link>
                </HeaderH1>
                <LinkUnderlined href={'https://m.me/Folwik'}>Write me</LinkUnderlined>
            </HeaderContainer>
        )}
    />
);


Header.defaultProps = {
    suppress: false
};

Header.propTypes = {
    suppress: PropTypes.bool,
};

export default Header;
