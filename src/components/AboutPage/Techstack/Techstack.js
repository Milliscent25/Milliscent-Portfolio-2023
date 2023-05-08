
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"

import './Techstack.scss';
import group5 from '../../../Assets/images/Group 5.png'
import group6 from '../../../Assets/images/Group 6.png'
import group7 from '../../../Assets/images/Group 7.png'
import group8 from '../../../Assets/images/Group 8.png'
import group9 from '../../../Assets/images/Group 9.png'
import group10 from '../../../Assets/images/Group 10.png'
import group11 from '../../../Assets/images/Group 11.png'
import group12 from '../../../Assets/images/Group 12.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { Link } from 'react-router-dom';



const Techstack = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className="tecstack container">
            <h2 className="text-center" data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">My Tech Stacks</h2>
            <h4 className="text-center mb-5">What I use To Make Awesome Products</h4>
            <Row className='container stack'>
                <Col md={3} data-aos="flip-left">
                    <img src={group5} alt='millicent' className="img-fluid" />
                </Col>
                <Col md={3} data-aos="flip-up">
                    <img src={group6} alt='millicent' className="img-fluid" />
                </Col>
                <Col md={3}  data-aos="flip-right">
                    <img src={group7} alt='millicent' className="img-fluid" />
                </Col>
                <Col md={3} data-aos="flip-down" >
                    <img src={group8} alt='millicent' className="img-fluid" />
                </Col>

            </Row>
            <Row className='mt-5 container stack'>
                <Col md={3} data-aos="flip-left">
                    <img src={group9} alt='millicent' className="img-fluid" />
                </Col>
                <Col md={3} data-aos="flip-down">
                    <img src={group10} alt='millicent' className="img-fluid"/>
                </Col>
                <Col md={3} data-aos="flip-up">
                    <img src={group11} alt='millicent' className="img-fluid" />
                </Col>
                <Col md={3} data-aos="flip-right">
                    <img src={group12} alt='millicent' className="img-fluid" />
                </Col>

            </Row>
        </section>



    )
}

export default Techstack