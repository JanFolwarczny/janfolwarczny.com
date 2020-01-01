import React from 'react'
import Link, {LinkUnderlined} from "./Link";
import {BREAKPOINT_MIN_WIDTH} from "./breakpoint";
import styled from "styled-components";
import {ParallaxBanner} from "react-scroll-parallax";


const ArticleWrap = styled.article`
    margin: 3rem 0;
    overflow: hidden;
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        display: flex;
    }
`;

const ImageWrap = styled.div`
    flex: 0 0 40%;
    img {
        display: block;
        max-width: 200px;
        -webkit-user-drag: none;
        user-select: none;
    }
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        margin-right: 3rem;
        img {
            max-width: 100%;
        }
    }
`;

const ImageLink = styled(Link)`
    display: block;
`;

const TextWrap = styled.div`
    margin-top: 1rem;
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        margin-top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

const Time = styled.time`
    white-space: nowrap;
    color: rgba(255, 255, 255, .35);
`;

const Medium = styled.span`
    white-space: nowrap;
    color: rgba(255, 255, 255, .35);
    &:before {
        content: '—';
        margin: 0 .5rem;
    }
`;

const Perex = styled.div`
    margin: 1rem 0;
`;

const Title = styled.h1`
    font-size: 1.25rem;
    margin: .5rem 0 1rem;
    a {
        text-decoration: none;
    }
`;


const BlogListArticle = (props) => {
    const date = new Date(props.date);
    return <ArticleWrap>
        <ImageWrap>
            <ImageLink to={props.link} hrefLang={props.lang}>
                <ParallaxBanner layers={[{image: props.img, amount: -0.1}]} style={{height: '180px'}}/>
            </ImageLink>
        </ImageWrap>
        <TextWrap>
            <div>
                <Time dateTime={props.date}>{date.toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })}</Time>
                <Medium>{props.medium}</Medium>
                <Title>
                    <Link to={props.link} hrefLang={props.lang}>{props.title}</Link>
                </Title>
                <Perex>{props.children}</Perex>
                <LinkUnderlined href={props.link} hrefLang={props.lang}>Read full post →</LinkUnderlined>
            </div>
        </TextWrap>
    </ArticleWrap>
};

export default BlogListArticle;
