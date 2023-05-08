import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"

import './Banner.scss';
// import mili from "../../Assets/images/hero.png"



const Banner = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className='hero'>
            <div className='hero-inner' data-aos="fade-up"
     data-aos-anchor-placement="top-center">
                <h1 >MILLISCENT</h1>
                <h3>RUFASHA</h3>
                <p>I’m a charismatic front end developer currently based in Harare, Zimbabwe working as a senior
                    developer
                    at uncommon.org</p>
                <Link to="about" className='dis-cover'>DISCOVER</Link>
            </div>
            {/* <img src={mili} alt='millicent' /> */}
        </section>


    )
}

export default Banner
