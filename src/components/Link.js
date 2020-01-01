import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {Link as GatsbyLink} from "gatsby";


const Link = ({children, to, activeClassName, partiallyActive, ...props}) => {
    const internal = /^\/(?!\/)/.test(to);
    return internal ? <GatsbyLink to={to} {...props}>{children}</GatsbyLink> : <a href={to} {...props}>{children}</a>;
};

export const LinkUnderlined = styled(Link)`
    text-decoration: none;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
    transition: .3s border-color;
    &:hover {
        border-color: white;
    }
`;

Link.defaultProps = {
    rel: `noopener noreferrer`,
    target: `_blank`
};

Link.propTypes = {
    to: PropTypes.string.isRequired
};

export default Link;
