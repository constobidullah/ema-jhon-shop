import React from 'react';
import './Products.css';

const Products = ({ product, handleAddToCart }) => {
    const { id, img, name, price, seller, ratings } = product;

    return (
        <div className='products-container'>
            <img src={img} alt="" />
            <div className='products-text'>
                <p>{name}</p>
                <p className='price-text'>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Raitings  : {ratings} star</p>
            </div>
            <div onClick={() => handleAddToCart(product)} className='button-cart'>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;