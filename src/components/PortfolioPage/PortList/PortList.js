import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Aos from "aos";
import "aos/dist/aos.css"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './PortList.scss';

// import mili from "../../Assets/images/hero.png"
 import group15 from "../../../Assets/images/Group 15.png"
//  import group4 from "../../../Assets/images/Group 4.png"
 import group from "../../../Assets/images/Group.png"
 import group18 from "../../../Assets/images/Group 18.png"
 import MI5 from "../../../Assets/images/mi5.png"
 import conwise from "../../../Assets/images/conwise.png"




const PortList = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section className="portifolio">

            <Row className='port1'>
                <Col lg={6} md={12} sm={12}>
                    <div>
                        <img src={group15} alt='millicent' className="img-fluid" />
                    </div>

                </Col>

                <Col lg={6} md={12} sm={12} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                    <div>
                    <h2>MY PORTFOLIO</h2>
                    <h4>TAYLOR'S AFRICA</h4>
                    <p>Taylors Africa is a fully registered and licensed, family-run photographic safari operator that specializes in group safaris across the Western side of Zimbabwe. We focus on the best-selected secrets and destinations that Zimbabwe has to offer.</p>
                    <Link to="https://taylorsafrica.com/" className="dis-cover">VIEW SITE</Link>
                    </div>

                </Col>
            </Row>

            <Row className='infor2'>
            <Col lg={6} md={12} sm={12}data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div>
                    
                    <h4>THE MOBI</h4>
                    <p>The MOBI is Zimbabwe’s very first Mobile Soup Kitchen, providing nutritious meals and support to women and children in some of our most vulnerable and isolated communities.</p>
                    <Link to="https://themobi.co.zw/" className="dis-cover">VIEW SITE </Link>
                    </div>

                </Col>

                <Col lg={6} md={12} sm={12}>
                    <div>
                        <img src={group18} alt='millicent' className="img-fluid" />
                    </div>

                </Col>

               
            </Row>

            <Row className='infor3 port1'>
                <Col lg={6} md={12} sm={12}>
                    <div>
                        <img src={group} alt='millicent' className="img-fluid" />
                    </div>

                </Col>

                <Col lg={6} md={12} sm={12} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div>
                   
                    <h4>CALIGRAPH</h4>
                    <p>We are CaliGraph, a public art and creative direction collective. We paint murals in public spaces in urban and rural areas. Our work centres on addressing societal themes guided by the United Nations’s Sustainable Development Goals.</p>
                    <Link to="http://caligraph.co.zw/" className="dis-cover">VIEW SITE
                    </Link>
                    </div>

                </Col>
            </Row> 

            <Row className='infor4'>
            <Col lg={6} md={12} sm={12}data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div>
                    
                    <h4>MI5 GROUP</h4>
                    <p>MI5 is a privately owned business working in the industrial & manufacturing space to help clients find and secure sources of supply in Die-Cut Gaskets/Insulation, Specialty Tapes, Reflective Tapes, Plastic Extrusions, Insulated Trims, Metal Fabrications, CNC Turning & Machining, Robotic Assemblies, Composite Panels (Insulated & Waterproof), Vibration/Noise Control, Rubber molding over CNC parts, Powder Coating & E-Coating.</p>
                    <Link to="https://www.mi5group.co/" className="dis-cover">VIEW SITE </Link>
                    </div>

                </Col>

                <Col lg={6} md={12} sm={12}>
                    <div>
                        <img src={MI5} alt='millicent' className="img-fluid" />
                    </div>

                </Col>

               
            </Row>
            <Row className='infor3 port1'>
                <Col lg={6} md={12} sm={12}>
                    <div>
                        <img src={conwise} alt='millicent' className="img-fluid" />
                    </div>

                </Col>

                <Col lg={6} md={12} sm={12} data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                    <div>
                   
                    <h4>CONTAINERWISE</h4>
                    <p>At Containawise we hire and sell Standard Unit 20 Foot and 40 Foot Containers, ranging from offices, accommodation, ablutions, storage and tuck shops.
                    We have years of experience in container modification and conversions to suite your needs and project.</p>
                    <Link to="http://containerwise.uncommon-staging.com/" className="dis-cover">VIEW SITE
                    </Link>
                    </div>

                </Col>
            </Row> 
        </section>



    )
}

export default PortList
