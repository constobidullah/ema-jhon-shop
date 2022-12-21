
import './Shop.css';
import { useState, useEffect } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {

    const products = useLoaderData();
    
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoredCart();

        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.productsContainer.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }

        setCart(savedCart)

    }, [products]);



    const handleAddToCart = (productInAnother) => {
        const newCart = [...cart, productInAnother];
        setCart(newCart)
        addToDb(productInAnother.id)
    }

    const clearCart = () => {
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>

            <div className='shop-item'>
                {
                    products.productsContainer.map(product => <Products

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        
                    ></Products>)
                }
            </div>


            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;