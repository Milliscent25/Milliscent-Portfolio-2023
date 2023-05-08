import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"

import './Mimi.scss';
// import group4 from '../../../Assets/images/Group 4.png'
import group17 from '../../../Assets/images/Group 17.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { ScrollContainer, Animator, } from 'react-scroll-motion';



const Mimi = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (

        <section className='abtmimi' >
            <Row className='align-items-center justify-content-space-between'>
                <Col lg={6} md={12} data-aos="zoom-out-up">
                    <div>
                        <h2>MILLISCENT RUFASHA</h2>
                        <h4>Front-end Web Developer</h4>
                        <p>I’m a charismatic front end developer currently based in Harare, Zimbabwe working as a senior
                            developer at uncommon.org I’m a charismatic front end developer currently based in Harare, Zimbabwe
                            working as a senior developer at uncommon.org I’m a charismatic front end developer</p>

                    </div>
                </Col>

                <Col lg={6} md={12}  data-aos="zoom-in-up">
                    <img src={group17} alt='millicent' className="img-fluid" />
                </Col>
            </Row>

        </section>


    )
}

export default Mimi
