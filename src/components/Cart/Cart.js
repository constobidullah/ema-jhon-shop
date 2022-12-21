import React from 'react';
import './Cart.css'

const Cart = ({ cart, clearCart }) => {
    
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    
    for (const totalPrice of cart) {
        total = total + totalPrice.price * totalPrice.quantity;
        shipping = shipping + totalPrice.shipping;
        quantity = quantity + totalPrice.quantity;
    }

    const tax = (total + shipping) / 100;
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart-parents'>
            <h2>Order summary</h2>
            <div className='cart-text'>
                <p>Selected items: {quantity}</p>
                <p>Price: {total}</p>
                <p>Total Shipping charge: {shipping}</p>
                <p>Tax : {tax}</p>
                <h3>Grand total: {grandTotal.toFixed(3)}</h3>
            </div>
            <button onClick={clearCart} className='clear-cart'>Clear cart</button>
        </div>
    );
};

export default Cart;