import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
import './ContactForm.scss';

// import linkedin from '../../../src/Assets/images/linkedin.png'
// import facebook from '../../../src/Assets/images/instagram-logo.png'
// import whatsapp from '../../../src/Assets/images/whatsapp.png'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o8r7dzf', 'template_gjx3x7h', form.current, 'RExwkJgex6YuLvX-N')
            .then((result) => {
                console.log(result.text);
                console.log("message send");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <Row className='containe justify-content-space-between'>
            <h2 className='text-center'>lets Get in Touch</h2>
                <Col md={6}>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder='Name' />

                        <input type="email" name="user_email" placeholder='Email' />

                        <textarea name="message" placeholder='Message' />
                        <input className='btn' type="submit" value="Send" />
                    </form>
                </Col>
                <Col md={6}> 
                {/* <div className='social'>
                <img src={linkedin} alt='millicent' className="img-fluid" />
                <img src={facebook} alt='millicent' className="img-fluid" />
                <img src={whatsapp} alt='millicent' className="img-fluid" />
                </div> */}
                 <Col md={6}>
                    <div className='footer-text'>
                       
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
                    </div>
                </Col>
                </Col>
            </Row>
        </>
    )
}

export default ContactForm