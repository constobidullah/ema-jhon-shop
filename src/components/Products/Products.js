import React from 'react';
import './Products.css'

const Products = ({ product }) => {
    const { img, name, price, seller, raitings } = product;
    return (
        <div className='products-container'>
            <img src={img} alt="" />
            <div className='products-text'>
                <p>{name}</p>
                <p className='price-text'>Price: ${price}</p>
                <p>Manufacturar: {seller}</p>
                <p>Raitings: {raitings} star</p>
            </div>
            <div className='button-cart'>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Products;