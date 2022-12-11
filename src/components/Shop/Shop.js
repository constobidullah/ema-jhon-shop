
import './Shop.css';
import { useState, useEffect } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("products.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);


    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products]);

    

    const handleAddToCart = (productInAnother) => {
        const newCart = [...cart, productInAnother];
        setCart(newCart)
        addToDb(productInAnother.id)
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