import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Review from '../Review/Review';

const Orders = () => {
    const { products, emptyFile } = useLoaderData();
    const [cart, setCart] = useState(emptyFile);

    return (
        <div>
            <div className='shop-container'>
                <div className='order-item'>
                    {
                        cart.map(product => <Review
                            key={product.id}
                            product={product}
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