import thumbnailProduct from '../../assets/images/image-product-1-thumbnail.jpg';

import { CartType } from '../../@types/CartType';
import { DataType } from '../../@types/DataType';

export const useDb = (cart: CartType[]): DataType[] => {
    const db: {
        products: DataType[];
    } = {
        products: [
            {
                id: 1,
                image: {
                    url: thumbnailProduct,
                    alt: 'A brown and white shoe'
                },
                text: "Fall Limited Edition Sneakers",
                price: 125
            }
        ]
    };

    let data: DataType[] = [];

    cart.forEach((product) => {
        db.products.forEach((productDb, index) => {
            if(product.id === productDb.id){
                data.push(productDb);

                data[index].amount = product.amount;
                data[index].totalPrice = productDb.price * product.amount;
            }
        });
    });

    return data;
};