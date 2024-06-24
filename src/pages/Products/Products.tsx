import * as S from './styles';

import imageProduct from '../../assets/images/image-product-1.jpg';

import { thumbnailList } from './consts/thumbnailList';

import { Lightbox } from './components/Lightbox';

import { useProducts } from './hooks/useProducts';

export const Products = () => {
    const {
        isOpenLightbox,
        amountProducts,
        handleLightbox,
        handleAmountProductsMinus,
        handleAmountProductsPlus,
        handleAddToCart
    } = useProducts();

    return (
        <S.Product>
            <S.ProductContainerImages>
                <S.ProductButtonImage
                    type="button"
                    onClick={handleLightbox}
                >
                    <S.ProductImage
                        src={imageProduct}
                        alt="A white and brown shoe"
                    />
                </S.ProductButtonImage>
                <S.ProductThumbnailsList>
                    {thumbnailList.map((thumbnailProduct, index) => (
                        <S.ProductThumbnailsItem
                            key={index}
                        >
                            <S.ProductThumbnails
                                src={thumbnailProduct}
                                alt="A white and brown shoe"
                            />
                        </S.ProductThumbnailsItem>
                    ))}
                </S.ProductThumbnailsList>
            </S.ProductContainerImages>

            <Lightbox
                isOpenLightbox={isOpenLightbox}
                handleLightbox={handleLightbox}
            />

            <S.ProductContainerInfos>
                <S.ProductInfosCompanyName>
                    Sneaker Company
                </S.ProductInfosCompanyName>
                <S.ProductInfosTitle>
                    Fall Limited Edition Sneakers
                </S.ProductInfosTitle>
                <S.ProductInfosText>
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </S.ProductInfosText>

                <S.ProductContainerValues>
                    <S.ProductValuesGroup>
                        <S.ProductValuesPrice>
                            $125.00
                        </S.ProductValuesPrice>
                        <S.ProductValuesPercentageDiscount>
                            50%
                        </S.ProductValuesPercentageDiscount>
                    </S.ProductValuesGroup>
                    <S.ProductValuesPriceDiscount>
                        $250.00
                    </S.ProductValuesPriceDiscount>
                </S.ProductContainerValues>

                <S.ProductContainerAddToCart>
                    <S.ProductContainerAmount>
                        <S.ProductButtonAmountIcon
                            type="button"
                            onClick={handleAmountProductsMinus}
                        >
                            <S.ProductIconMinus />
                        </S.ProductButtonAmountIcon>

                        <S.ProductAmountText>
                            {amountProducts}
                        </S.ProductAmountText>

                        <S.ProductButtonAmountIcon
                            type="button"
                            onClick={handleAmountProductsPlus}
                        >
                            <S.ProductIconPlus />
                        </S.ProductButtonAmountIcon>
                    </S.ProductContainerAmount>

                    <S.ProductButtonAddToCart
                        type="button"
                        onClick={() => handleAddToCart(1)}
                    >
                        <S.ProductIconCart />

                        Add to cart
                    </S.ProductButtonAddToCart>
                </S.ProductContainerAddToCart>
            </S.ProductContainerInfos>
        </S.Product>
    );
};