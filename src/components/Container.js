import styled from "styled-components";
import PropTypes from "prop-types";
import {BREAKPOINT_MIN_WIDTH} from "./breakpoint";

export const CONTAINER_WIDTH = {
    full: null,
    max960: 960,
    max1200: 1200
};

const Container = styled.div`
    max-width: ${props => props.maxWidth ? (props.maxWidth + 'px') : '100%'};
    margin-left: ${props => props.maxWidth ? 'auto' : '0'};
    margin-right: ${props => props.maxWidth ? 'auto' : '0'};
    position: relative;
    padding: 0 ${props => props.withPadding ? '1rem' : '0'};
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        padding: 0 ${props => props.withPadding ? '2rem' : '0'};    
    }
`;

Container.defaultProps = {
    withPadding: true,
    maxWidth: 960
};

Container.propTypes = {
    maxWidth: PropTypes.oneOf(Object.values(CONTAINER_WIDTH)),
    withPadding: PropTypes.bool,
};


export default Container;
