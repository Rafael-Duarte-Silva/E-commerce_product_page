import styled from "styled-components";

import { IconCart } from "../../components/Icons/IconCart";
import { IconMinus } from "./components/Icons/IconMinus";
import { IconPlus } from "./components/Icons/IconPlus";

export const Product = styled.div `
    display: flex;
    align-items: center;

    column-gap: clamp(5rem, 1.571rem + 7.143vw, 8rem);

    margin-block: clamp(0rem, -6.571rem + 13.69vw, 5.75rem);

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        flex-direction: column;
    }
`;

export const ProductContainerImages = styled.div `
    display: flex;
    flex-direction: column;

    row-gap: 2rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        display: none;
    }
`;

export const ProductButtonImage = styled.button `
    cursor: pointer;

    background-color: transparent;

    border: 0;
`;

export const ProductImage = styled.img `
    border-radius: 0.75rem;
`;

export const ProductThumbnailsList = styled.ul `
    display: flex;

    column-gap: clamp(0.938rem, -0.862rem + 2.902vw, 1.75rem);
`;

export const ProductThumbnails = styled.img `
    cursor: pointer;

    border-radius: 0.625rem;

    transition: opacity 0.4s;

    &:hover{
        opacity: 0.6;
    }
`;

export const ProductThumbnailsItem = styled.li `
    border-radius: 0.625rem;

    &:nth-child(1){
        outline: 0.125rem solid ${props => props.theme.colors.primary.orange};

        & ${ProductThumbnails}{
            opacity: 0.4;
        }
    }
`;

export const ProductContainerInfos = styled.section `
    @media screen and (max-width: ${props => props.theme.breakpoints.lg}){
        padding-inline: 1.5625rem;

        margin-block-start: 1.625rem;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        margin-block-end: 5.5rem;
    }
`;

export const ProductInfosCompanyName = styled.span `
    font-style: normal;
    font-size: calc(0.831rem + 0.188vw);
    font-weight: 700;

    text-transform: uppercase;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};
`;

export const ProductInfosTitle = styled.h1 `
    font-size: calc(1.435rem + 1.878vw);
    font-weight: 700;

    line-height: 1.1;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};

    margin-block-start: calc(1.03rem + 0.939vw);
`;

export const ProductInfosText = styled.p `
    font-size: calc(0.912rem + 0.376vw);

    line-height: 1.5;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};

    margin-block-start: calc(1.141rem + 2.066vw);
`;

export const ProductContainerValues = styled.div `
    display: flex;
    flex-direction: column;

    margin-block-start: 2.25rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        flex-direction: row;
        flex-wrap: wrap;

        align-items: center;
        justify-content: space-between;
    }
`;

export const ProductValuesGroup = styled.div `
    display: flex;

    column-gap: calc(0.905rem + 0.939vw);
`;

export const ProductValuesPrice = styled.span `
    font-size: 1.75rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};
`;

export const ProductValuesPercentageDiscount = styled.span `
    width: 3.25rem;
    height: 1.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.white};

    border-radius: 0.375rem;

    background-color: ${props => props.theme.colors.neutral.veryDarkBlue};
`;

export const ProductValuesPriceDiscount = styled.span `
    display: block;

    font-size: 1rem;
    font-weight: 700;

    text-decoration: line-through;

    color: ${props => props.theme.colors.neutral.darkGrayishBlue};

    margin-block-start: 1.25rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        margin-block-start: 0;
    }
`;

export const ProductContainerAddToCart = styled.div `
    display: flex;
    align-items: center;

    column-gap: 2rem;

    margin-block-start: 2.625rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        align-items: initial;
        flex-direction: column;

        row-gap: 2.375rem;
    }
`;

export const ProductContainerAmount = styled.div `
    display: flex;
    align-items: center;

    column-gap: 2.875rem;

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        justify-content: space-around;

        column-gap: 0;
    }
`;

export const ProductButtonAmountIcon = styled.button `
    cursor: pointer;

    background-color: transparent;

    border: 0;
`;

export const ProductIconMinus = styled(IconMinus) `
    cursor: pointer;

    width: 0.75rem;
    height: auto;
`;

export const ProductIconPlus = styled(IconPlus) `
    cursor: pointer;

    width: 0.75rem;
    height: auto;
`;

export const ProductAmountText = styled.span `
    font-size: 1.125rem;
    font-weight: 700;
`;

export const ProductButtonAddToCart = styled.button `
    cursor: pointer;

    width: 17rem;
    height: 3.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    column-gap: 1rem;

    font-size: 1.125rem;
    font-weight: 700;

    color: ${props => props.theme.colors.neutral.veryDarkBlue};

    border-radius: 0.5rem;
    border: 0;

    background-color: ${props => props.theme.colors.primary.orange};

    @media screen and (max-width: ${props => props.theme.breakpoints.md}){
        width: auto;
    }
`;

export const ProductIconCart = styled(IconCart) `
    & path{
        fill: ${props => props.theme.colors.neutral.veryDarkBlue};
    }
`;