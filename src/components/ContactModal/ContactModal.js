import React from 'react';
import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


const ContactModal = () => {
  return (
    <> 
      <section className='hero'>
          <div className='hero-inner'>
              <h1>Contact</h1>
              <h3>MILLISCENT</h3>
              <Link to="about" className='dis-cover'>DISCOVER</Link>
          </div>
          {/* <img src={mili} alt='millicent' /> */}
      </section>


      

</>
  )
}

export default ContactModal