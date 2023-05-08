import React from 'react'
import { Link } from 'react-router-dom';

import './PortBanner.scss';
// import mili from "../../Assets/images/hero.png"



const PortBanner = () => {
    return (
        <section className='hero'>
            <div className='hero-inner'>
                <h1>MY PORTFOLIO</h1>
                <h3>MILLISCENT</h3>
                <Link to="about" className='dis-cover'>DISCOVER</Link>
            </div>
           
        </section>


    )
}

export default PortBanner
