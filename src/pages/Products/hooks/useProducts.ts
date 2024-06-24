import { useState } from "react";

import { CartType } from "../../../@types/CartType";

export const useProducts = () => {
    const [isOpenLightbox, SetIsOpenLightbox] = useState<boolean>(false);
    const [amountProducts, setAmoutProducts] = useState<number>(0);

    const handleLightbox = (): void => {
        SetIsOpenLightbox(!isOpenLightbox);
    };

    const handleAmountProductsMinus = (): void => {
        if(amountProducts > 0){
            setAmoutProducts(amountProducts - 1);
        }
    };

    const handleAmountProductsPlus = (): void => {
        setAmoutProducts(amountProducts + 1);
    };

    const handleAddToCart = (id: number): void => {
        const cart: CartType[] = JSON.parse(localStorage.getItem("cart") || '[]');

        const index = cart.findIndex(product => product?.id === id);

        if(index >= 0){
            cart[index] = {
                id: id,
                amount: amountProducts
            };

            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else{
            cart.push({
                id: id,
                amount: amountProducts
            });
    
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    };

    return { 
        isOpenLightbox,
        amountProducts,
        handleLightbox,
        handleAmountProductsMinus,
        handleAmountProductsPlus,
        handleAddToCart
     };
};