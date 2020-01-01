import "normalize.css";
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import {Waypoint} from "react-waypoint";
import {ParallaxProvider} from "react-scroll-parallax/cjs";
import {createGlobalStyle} from "styled-components";
import {BREAKPOINT_MIN_WIDTH} from "./breakpoint";
import {FONT_WEIGHT} from "./font";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 14px;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-feature-settings: 'kern', 'liga', 'clig', 'calt';
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        @media ${BREAKPOINT_MIN_WIDTH.tablet} {    
            font-size: 15px;
        }
    }
    body {
        background-color: black;
        color: white;
        line-height: 1.5;
        padding-top: 4rem;
    }
    a {
        color: inherit;
        display: inline-block;
        -webkit-text-underline-position: under;
    }
    b, strong {
        font-weight: ${FONT_WEIGHT.bold};
    }
`;

const Layout = ({children}) => {
    const [isHeaderSuppress, setHeaderSuppress] = useState(false);

    return <ParallaxProvider>
        <GlobalStyle/>
        <Header suppress={isHeaderSuppress}/>
        <main>
            <Waypoint
                // topOffset={'56px'}
                onEnter={() => {
                    setHeaderSuppress(false);
                }}
                onLeave={() => setHeaderSuppress(true)}
            />
            {children}
        </main>
    </ParallaxProvider>;
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
