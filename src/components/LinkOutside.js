import React from "react";
import PropTypes from "prop-types";

const LinkOutside = ({to, rel, children}) => (
    <a href={to} target={`_blank`} rel={rel}>{children}</a>
);

LinkOutside.defaultProps = {
    rel: `noopener noreferrer`
};

LinkOutside.propTypes = {
    to: PropTypes.string.isRequired,
    rel: PropTypes.string
};

export default LinkOutside;
