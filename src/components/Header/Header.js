import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-parents'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='header-link'>
                <a href="">Shop</a>
                <a href="">Inventory</a>
                <a href="">Orders</a>
                <a href="">Review</a>
                <a href="">Support</a>
            </div>
        </div>
    );
};

export default Header;