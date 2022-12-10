
import './Shop.css';
import { useState, useEffect } from 'react';
import Products from '../Products/Products';

const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className='shop-container'>

            <div className='shop-item'>
                {
                    products.map(product => <Products

                        key={product.id} 
                        product={product}
                        ></Products>)
                }
            </div>


            <div>
                <h2>This is cart component </h2>
            </div>
        </div>
    );
};

export default Shop;