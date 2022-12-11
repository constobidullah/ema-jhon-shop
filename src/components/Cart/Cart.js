import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    
    let total = 0;
    let shipping = 0;
    
    for (const totalPrice of cart) {
        total = total + totalPrice.price;
        shipping = shipping + totalPrice.shipping;
    }

    const tax = (total + shipping) / 100;
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-parents'>
            <h2>Order summary</h2>
            <div className='cart-text'>
                <p>Selected items: {cart.length}</p>
                <p>Price: {total}</p>
                <p>Total Shipping charge: {shipping}</p>
                <p>Tax : {tax}</p>
                <h3>Grand total: {grandTotal.toFixed(3)}</h3>
            </div>
        </div>
    );
};

export default Cart;