import React from "react";
import styled from "styled-components";
import {LinkUnderlined} from "./Link";
import {FONT_WEIGHT} from "./font";

export const SocialLinksNav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    margin: 7rem -1rem;
    padding: 0;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: ${FONT_WEIGHT.semibold};
    > * {
        margin: 1rem;
    }
`;


const SocialLinks = () => (
    <SocialLinksNav>
        <LinkUnderlined to={'https://www.facebook.com/Folwik'}>Facebook</LinkUnderlined>
        <LinkUnderlined to={'https://www.instagram.com/janfolwarczny'}>Instagram</LinkUnderlined>
        <LinkUnderlined to={'https://www.linkedin.com/in/janfolwarczny/'}>LinkedIn</LinkUnderlined>
        <LinkUnderlined to={'https://unsplash.com/@janfolwarczny'}>Unsplash</LinkUnderlined>
        <LinkUnderlined to={'https://www.pinterest.com/janfolwarczny'}>Pinterest</LinkUnderlined>
        <LinkUnderlined to={'mailto:jan@janfolwarczny.com'}>E-mail</LinkUnderlined>
        <LinkUnderlined to="/invoicing">Invoicing</LinkUnderlined>
    </SocialLinksNav>
);

export default SocialLinks;
