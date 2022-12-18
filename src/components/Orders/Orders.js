import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <div>
            <h3>Orders page of customer orders {products.length}</h3>
        </div>
    );
};

export default Orders;