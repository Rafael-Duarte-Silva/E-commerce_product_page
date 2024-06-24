import { useState } from "react";

import { CartType } from "../../../../../@types/CartType";

export const useCart = () => {
    const [isOpenCart, setIsOpenCart] = useState<boolean>(false);

    const handleOpenCart = (): void => {
        setIsOpenCart(!isOpenCart);
    };

    const handleDeleteProduct = (id: number): void => {
        const cart: CartType[] = JSON.parse(localStorage.getItem("cart") || '[]');

        const index = cart.findIndex(product => product?.id === id);

        if(index >= 0) {
            cart.splice(index, 1);

            localStorage.setItem("cart", JSON.stringify(cart));
        }
    };

    return {
        isOpenCart,
        handleOpenCart,
        handleDeleteProduct
    };
};