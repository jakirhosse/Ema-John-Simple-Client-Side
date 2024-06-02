import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';
const Product = (props) => {
    const { name, seller, img, price, ratings } = props.product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <p>Price: <span>{price}</span></p>
                <p>Seller: <span>{seller}</span></p>
                <p>Rating: <span>{ratings}</span></p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
            <FaShoppingCart></FaShoppingCart>
            </button>
        </div>
    );
};

export default Product;
