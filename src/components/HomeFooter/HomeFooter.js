import React from 'react'

import './HomeFooter.scss';

// import mili from "../../Assets/images/hero.png"
import Rectangle114 from '../../Assets/images/Rectangle 1 4.png';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




const HomeFooter = () => {
    return (
        <footer className='footer'>
            <Row>
                <Col lg={4} md={12} sm={12}>
                    <img src={Rectangle114} alt='millicent' />
                </Col>
                <Col lg={8}  md={12} sm={12}>
                    <div className='footer-text'>
                        <h2 className="">Contact</h2>
                        <div>
                            <h4>Mobile</h4>
                            <p>0782 596 081</p>
                            <h4>Email</h4>
                            <p>rufashamilliscentchido@gmail.com <br></br>
                                milliscent@uncommon.org</p>

                            <h4>GitHub</h4>
                            <p>https://github.com/Milliscent25
                            </p>
                        </div>
                        <p className="copy ">Copyright 2022 Milliscent Rufasha</p>
                    </div>
                </Col>
            </Row>
        </footer>


    )
}

export default HomeFooter
