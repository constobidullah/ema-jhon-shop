
import './Shop.css';
import { useState, useEffect } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart = (productInAnother) => {
        const newCart = [...cart, productInAnother];
        setCart(newCart)
        console.log(newCart)
    }

    return (
        <div className='shop-container'>

            <div className='shop-item'>
                {
                    products.map(product => <Products

                        key={product.id} 
                        product={product}
                        handleAddToCart ={handleAddToCart}
                        ></Products>)
                }
            </div>


            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;