import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-parents'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='header-link'>
                <Link to="/">Shop</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/review">Review</Link>
                <Link to="/support">Support</Link>
            </div>
        </div>
    );
};

export default Header;