import styled from "styled-components";

import { IconCart } from "../../../Icons/IconCart";
import { IconDelete } from "../Icons/IconDelete";

export const CartContainer = styled.div `
    position: relative;

    margin-inline-end: calc(0.847rem + 2.254vw);

    @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
        position: static;
    }
`;

export const CartButtonCart = styled.button `
    cursor: pointer;

    background-color: transparent;

    border: 0;
`;

export const CartIconCart = styled(IconCart) `
    width: 1.5rem;
    height: auto;
`;

export const CartContainerBackground = styled.div `
    display: flex;
    justify-content: center;
    
    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        position: absolute;
        top: 5.625rem;
        left: 0;

        width: 100%;
        
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const CartContainerContent = styled.div `
    position: absolute;
    top: 3.75rem;

    z-index: 1;
    
    width: 22.5rem;

    background-color: ${props => props.theme.colors.neutral.white};

    border-radius: 0.5rem;

    -webkit-box-shadow: 0rem 1.625rem 2.8125rem -2rem rgba(0,0,0,0.75);
    -moz-box-shadow: 0rem 1.625rem 2.8125rem -2rem rgba(0,0,0,0.75);
    box-shadow: 0rem 1.625rem 2.8125rem -2rem rgba(0,0,0,0.75);

    @media screen and (max-width: ${props => props.theme.breakpoints.xl}){
        top: 5.625rem;
        right: 0.5rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.sm}){
        position: static;

        width: 96%;
    }
`;

export const CartContentTitle = styled.h2 `
    font-size: 1.25rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};

    box-sizing: border-box;
    padding: 1.5rem;
`;

export const CartContentSeparator = styled.hr `
    border: 0.0625rem solid hsl(0, 0%, 94%);
`;

export const CartContent = styled.div `
    min-height: 11.75rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    row-gap: 1.625rem;

    box-sizing: border-box;
    padding: 1.5rem;
`;

export const CartContentTextEmpty = styled.p `
    font-size: 1.125rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
`;

export const CartContentList = styled.ul `
    width: 100%;

    display: flex;
    flex-direction: column;

    row-gap: 1.625rem;
`;

export const CartContentItem = styled.li `
    display: flex;
    justify-content: space-between;
`;

export const CartContentImage = styled.img `
    width: 3.125rem;
    height: auto;

    border-radius: 0.25rem;
`;

export const CartContentContainerText = styled.span `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding-block: 0.3125rem;
`;

export const CartContentText = styled.p `
    font-size: 1rem;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
`;

export const CartContentInfos = styled.span `
    font-size: 1rem;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
`;

export const CartContentPrice = styled(CartContentInfos) `
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};
`;

export const CartContentButtonDelete = styled.button `
    cursor: pointer;

    background-color: transparent;

    border: 0;
`;

export const CartContentIconDelete = styled(IconDelete) `
    width: 0.875rem;
    height: auto;
`;

export const CartContentButtonCheckout = styled.button `
    cursor: pointer;

    width: 100%;
    height: 3.5rem;

    font-size: 1.125rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};

    background-color: ${props => props.theme.colors.primary.orange};

    border-radius: 0.5rem;
    border: 0;
`;