import React from 'react';
import { getStoredCart } from '../../utilities/fakedb';


  export const ProductAndCartLoder = async () => {
        const productsData = await fetch('https://ema-john-simple-server-side.vercel.app/products');
        const {products} = await productsData.json();
    
        // get cart
        const savedCart = getStoredCart();
        const initialCart = [];
        
        for (const id in savedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = savedCart[id];
                addedProduct.quantity = quantity;
                initialCart.push(addedProduct);
            }
        }
        return { products: products, initialCart: initialCart };
};

export default ProductAndCartLoder;