import styled, { keyframes } from "styled-components";

import imageAvatar from '../../assets/images/image-avatar.png';

import { Link } from 'react-router-dom';
import { IconMenu } from "./components/Icons/IconMenu";
import { IconLogo } from "./components/Icons/IconLogo";
import { IconClose } from "../Icons/IconClose";

export const Header = styled.header `
    height: calc(3.282rem + 4.131vw);

    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${props => props.theme.colors.neutral.white};

    -webkit-box-shadow: 0rem 0.125rem 0.1875rem -0.0625rem rgba(0,0,0,0.2);
    -moz-box-shadow: 0rem 0.125rem 0.1875rem -0.0625rem rgba(0,0,0,0.2);
    box-shadow: 0rem 0.125rem 0.1875rem -0.0625rem rgba(0,0,0,0.2);

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        padding-inline: 1.5rem;

        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
    }
`;

export const HeaderSeparator = styled.div `
    display: flex;
    align-items: center;
`;

export const HeaderButtonMenu = styled.button `
    display: none;

    background-color: transparent;

    border: 0;

    margin-inline-end: 1rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        display: block;
    }
`;

export const HeaderIconMenu = styled(IconMenu) `
    width: 1rem;
    height: auto;
`;

export const HeaderIconLogo = styled(IconLogo) `
    width: 8.625rem;
    height: auto;

    margin-inline-end: 3.5rem;
`;

export const HeaderBackgroundLinks = styled.div<{$isOpenMenu: boolean}> `
    @media screen and (max-width: ${props => props.theme.breakpoints.md}){ 
        position: fixed;
        top: 0;
        left: 0;

        z-index: 2;

        display: ${props => props.$isOpenMenu ? 'block' : 'none'};

        width: 100vw;
        height: 100vh;

        background-color: hsl(0, 0%, 0%, 75%);
    }
`;

export const menuTrasition = keyframes`
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0%);
    }
`;

export const HeaderContainerLinks = styled.div `
    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        width: 15.625rem;
        height: 100%;

        box-sizing: border-box;
        padding: 1.625rem;

        background-color: ${props => props.theme.colors.neutral.white};

        overflow-y: auto;

        animation: ${menuTrasition} 0.4s ease-out forwards;

        @media (update: low), (prefers-reduced-motion: reduce){
            animation-duration: 0.6s;
        }
    }
`;

export const HeaderButtonClose = styled.button `
    display: none;

    background-color: transparent;

    border: 0;

    margin-block-end: 3.5rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        display: block;
    }
`;

export const HeaderIconClose = styled(IconClose) `
    width: 0.875rem;
    height: auto;
`;

export const HeaderLinkList = styled.ul `
    display: flex;

    column-gap: 2.125rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        flex-direction: column;

        row-gap: 2rem;
    }
`;

export const HeaderLinkText = styled(Link) `
    font-size: 1rem;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};

    text-decoration: none;

    &:hover{
        color: ${props => props.theme.colors.neutral.veryDarkBlue};

        text-decoration: underline ${props => props.theme.colors.primary.orange} 0.25rem;
        text-underline-offset: calc((3.282rem + 4.131vw) / 2 - 0.5938rem);
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        font-size: 1.125rem;
        font-weight: 700;

        color: ${props => props.theme.colors.neutral.veryDarkBlue};

        &:hover{
            text-decoration: none;
        }
    }
`;

export const HeaderAvatar = styled.div `
    cursor: pointer;

    width: calc(0.928rem + 2.441vw);
    height: calc(0.928rem + 2.441vw);
    
    border-radius: 50%;

    background-image: url(${imageAvatar});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    &:hover{
        outline: 0.125rem solid ${props => props.theme.colors.primary.orange};
    }
`;