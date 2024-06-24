import * as S from './styles';

import { IconDelete } from '../Icons/IconDelete';

import { useCart } from './hooks/useCart';

import { useDb } from '../../../../mocks/hooks/useDb';

export const Cart = () => {
    const {
        isOpenCart,
        handleOpenCart,
        handleDeleteProduct
    } = useCart();

    const data = useDb(JSON.parse(localStorage.getItem("cart") || '[]'));

    return (
        <S.CartContainer>
            <S.CartButtonCart
                type="button"
                onClick={handleOpenCart}
            >
                <S.CartIconCart />
            </S.CartButtonCart>
            {isOpenCart && (
                <S.CartContainerContent>
                    <S.CartContentTitle>
                        Cart
                    </S.CartContentTitle>

                    <S.CartContentSeparator />

                    <S.CartContent>
                        {data.length <= 0 && (
                            <S.CartContentTextEmpty>
                                Your cart is empty.
                            </S.CartContentTextEmpty>
                        )}

                        {data.length > 0 && (
                            <>
                                <S.CartContentList>
                                    {data.map((product) => (
                                        <S.CartContentItem 
                                            key={product?.id}
                                        >
                                            <S.CartContentImage
                                                src={product?.image?.url}
                                                alt={product?.image?.alt}
                                            />

                                            <S.CartContentContainerText>
                                                <S.CartContentText>
                                                    {product?.text}
                                                </S.CartContentText>
                                                <S.CartContentInfos>
                                                    {product?.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} x {product?.amount} <S.CartContentPrice>
                                                        {product.totalPrice ? product.totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : ''}
                                                    </S.CartContentPrice>
                                                </S.CartContentInfos>
                                            </S.CartContentContainerText>

                                            <S.CartContentButtonDelete
                                                type="button"
                                                onClick={() => handleDeleteProduct(product?.id)}
                                            >
                                                <IconDelete />
                                            </S.CartContentButtonDelete>
                                        </S.CartContentItem>
                                    ))}
                                </S.CartContentList>

                                <S.CartContentButtonCheckout
                                    type="button"
                                >
                                    Checkout
                                </S.CartContentButtonCheckout>
                            </>
                        )}
                    </S.CartContent>
                </S.CartContainerContent>
            )}
        </S.CartContainer>
    );
};