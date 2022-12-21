import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const { products, emptyFile } = useLoaderData();
    const [cart, setCart] = useState(emptyFile);

    const removeItemHandle = id => {
        const storeItem = cart.filter(product => product.id !== id);
        setCart(storeItem)
        removeFromDb(id)
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
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;