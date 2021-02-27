import React from 'react'
import Link, {LinkUnderlined} from "./Link";
import {BREAKPOINT_MIN_WIDTH} from "./breakpoint";
import styled from "styled-components";


const ArticleWrap = styled.article`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        margin-bottom: 40px;
    }
`;

const ImageWrap = styled.div`
    width: 100%;
`;

const ImageLink = styled(Link)`
    display: block;
    padding-bottom: 56.25%;
    position: relative;
    img {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        -webkit-user-drag: none;
        user-select: none;
    }
`;

const TextWrap = styled.div`
    padding: 16px 24px 20px;
    background-image: linear-gradient(to bottom, hsl(0, 0%, 5%) 33%, hsl(0, 0%, 15%));
    flex-grow: 1;
    @media ${BREAKPOINT_MIN_WIDTH.tablet} {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Time = styled.time`
    white-space: nowrap;
    color: rgba(255, 255, 255, .35);
    font-size: .85rem;
`;

const Medium = styled.span`
    white-space: nowrap;
    font-size: .85rem;
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
    font-size: 1rem;
    margin: 4px 0 0;
    a {
        text-decoration: none;
    }
`;

const ImageReadMore = styled(LinkUnderlined)`
    margin-top: auto;
    color: rgba(255, 255, 255, .35);
    font-size: .85rem;
`;

const BlogListArticle = (props) => {
    const date = new Date(props.date);
    return <ArticleWrap>
        <ImageWrap>
            <ImageLink to={props.link} hrefLang={props.lang}>
                <img src={props.img}/>
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
            </div>
            <Title>
                <Link to={props.link} hrefLang={props.lang}>{props.title}</Link>
            </Title>
            <Perex>{props.children}</Perex>
            <ImageReadMore href={props.link} hrefLang={props.lang}>Read full post →</ImageReadMore>
        </TextWrap>
    </ArticleWrap>
};

export default BlogListArticle;
