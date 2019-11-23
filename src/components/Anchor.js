import React from "react";
import PropTypes from "prop-types";

const Anchor = ({href, children, ...props}) => (
    <a href={href} {...props}>{children}</a>
);

Anchor.defaultProps = {
    rel: `noopener noreferrer`,
    target: `_blank`
};

Anchor.propTypes = {
    href: PropTypes.string.isRequired
};

export default Anchor;
