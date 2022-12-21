import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Review.css';

const Review = ({ product, removeItemHandle }) => {
    const {id,  img, name, price, shipping, quantity } = product;
    return (
        <div className='review-container'>
            <div className='review-picture-and-text'>
                <div className='review-picture'>
                    <img src={img} alt="" />
                </div>
                <div className='review-text'>
                    <p>{name}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Shipping Charge : {shipping}</p>
                    <p>Price : {price}</p>
                </div>
            </div>
            <div className='delete-button'>
                <button onClick={() =>removeItemHandle(id)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Review;