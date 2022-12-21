import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';
import './Orders.css'

const Orders = () => {
    const { products, emptyFile } = useLoaderData();
    const [cart, setCart] = useState(emptyFile);

    const removeItemHandle = id => {
        const storeItem = cart.filter(product => product.id !== id);
        setCart(storeItem)
        removeFromDb(id)
    }

    const clearCart = () => {
        deleteShoppingCart()
    }

    return (
        <div>
            <div className='shop-container'>
                <div className='order-item'>
                    {
                        cart.map(product => <Review
                            key={product.id}
                            product={product}
                            removeItemHandle={removeItemHandle}
                        ></Review>)
                    }
                    <div className='user-no-added-something'>
                        {
                            cart.length === 0 && <div>
                                <h1>Your cart is Empty</h1>
                                <h2>Please add something in your cart</h2>
                                <h2>
                                    <Link to="/">Visit here and buy product</Link>
                                </h2>
                            </div>
                        }
                    </div>
                </div>
                <div className='cart-container'>
                    <Cart clearCart={clearCart} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;