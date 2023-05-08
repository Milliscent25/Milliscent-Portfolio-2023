import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"
import './AbtBanner.scss';
// import mili from "../../Assets/images/hero.png"



const AbtBanner = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className='hero' >
            <div className='hero-inner'>
                
                <h1 data-aos="fade-down-right">But Who IS</h1>
                <h3 data-aos="fade-down-right">MILLISCENT</h3>
                <Link to="about" className='dis-cover'>DISCOVER</Link>
            </div>
            {/* <img src={mili} alt='millicent' /> */}
        </section>


    )
}

export default AbtBanner
