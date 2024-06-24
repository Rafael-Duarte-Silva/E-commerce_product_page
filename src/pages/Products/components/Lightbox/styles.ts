import styled from "styled-components";

import { IconClose } from "../../../../components/Icons/IconClose";
import { IconPrev } from "./components/icons/IconPrev";
import { IconNext } from "./components/icons/IconNext";

export const LightboxBackground = styled.div<{$isOpenLightbox: boolean}> `
    position: fixed;
    left: 0;
    top: 0;

    width: 100vw;
    height: 100vh;

    display: ${props => props.$isOpenLightbox ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;

    background-color: hsl(0, 0%, 0%, 75%);

    overflow-y: auto;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        position: static;

        width: 100%;
        height: max-content;

        display: block;

        background-color: transparent;

        overflow-y: visible;
    }
`;

export const LightboxContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

export const LightboxButtonClose = styled.button `
    cursor: pointer;

    align-self: flex-end;

    background-color: transparent;

    border: 0;

    & path{
        fill: ${props => props.theme.colors.neutral.white};

        transition-duration: opacity 0.4s;
    }

    &:hover path{
        fill: ${props => props.theme.colors.primary.orange};
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        display: none;
    }
`;

export const LightboxIconClose = styled(IconClose) `
    width: 1.25rem;
    height: auto;
`;

export const LightboxContainerImage = styled.div `
    position: relative;

    margin-block-start: 1.375rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        margin-block-start: 0;
    }
`;

export const LightboxProductImage = styled.img `
    width: 34.375rem;
    height: auto;

    border-radius: 0.75rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        width: 100%;
        height: clamp(18.75rem, -7.212rem + 72.115vw, 37.5rem);

        object-fit: cover;
        object-position: 0 -5.625rem;

        border-radius: 0;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        object-position: 0 -2.25rem;
    }
`;

export const LightboxButtonArrows = styled.button `
    cursor: pointer;

    width: 3.5rem;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${props => props.theme.colors.neutral.white};

    border-radius: 50%;
    border: 0;

    & path{
        transition-duration: opacity 0.4s;
    }

    &:hover path{
        stroke: ${props => props.theme.colors.primary.orange};
    }
`;

export const LightboxButtonPrev = styled(LightboxButtonArrows) `
    position: absolute;
    left: -1.75rem;
    top: calc(50% - 1.75rem);

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        left: 0;

        margin-inline-start: 1rem;
    }
`;

export const LightboxButtonNext = styled(LightboxButtonArrows) `
    position: absolute;
    right: -1.75rem;
    top: calc(50% - 1.75rem);

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        right: 0;

        margin-inline-end: 1rem;
    }
`;

export const LightboxIconPrev = styled(IconPrev) `
    width: 0.75rem;
    height: auto;
`;

export const LightboxIconNext = styled(IconNext) `
    width: 0.75rem;
    height: auto;
`;

export const LightboxThumbnailsList = styled.ul `
    display: flex;
    justify-content: center;
    
    column-gap: 1.875rem;

    margin-block-start: 2.5rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        display: none;
    }
`;

export const LightboxThumbnails = styled.img `
    cursor: pointer;

    border-radius: 0.625rem;

    transition: opacity 0.4s;

    &:hover{
        opacity: 0.6;
    }
`;

export const LightboxThumbnailsItem = styled.li<{$index: number}> `
    width: 5.5rem;
    height: 5.5rem;

    background-color: ${props => props.theme.colors.neutral.white};

    border-radius: 0.625rem;

    &:nth-child(${props => props.$index}){
        outline: 0.125rem solid ${props => props.theme.colors.primary.orange};

        & ${LightboxThumbnails}{
            opacity: 0.4;
        }
    }
`;

export const LightboxThumbnailsLabel = styled.label `
    position: relative;
`;

export const LightboxThumbnailsInput = styled.input `
    position: absolute;
    left: 0;
    top: 0;

    opacity: 0;
`;