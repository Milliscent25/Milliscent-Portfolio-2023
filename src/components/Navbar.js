// import React from 'react'
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='Navbar'>
            <span className='nav-logo'></span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href='/'> Home</a>
                <a href='/about'> About</a>
                <a href='/portfolio'> Portfolio</a>
                <a href='/contact'> Contact</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className='bar'></div>
            </div>
        </div>
    );
}






export default Navbar;