
import React from 'react'

import '../../components/Who/Who.scss';
import clock from "../../Assets/images/clarity_clock-line.png";
import vector from "../../Assets/images/Vector (1).png";
import dependable from "../../Assets/images/dependable.png"



const Who = () => {
    return (
        // About Section 
        <section className="about" data-aos="fade-up"
        data-aos-duration="3000">
            <h6>WHO AM I</h6>
            <h4>CREATING AWESOME WEBSITES INTERFACES</h4>
            <div className="row mt-5 abt-inner">
                <div className="col-lg-4  col-md-12 col-sm-12"  data-aos="zoom-in-up">
                    <img src={clock} alt='vector' />
                    <h5>TIME-CAUTIOUS</h5>
                    <p>As a web developer, time management is a critical aspect of my work. I can deliver high-quality work on time and within budget. This is essential for my clients, who often have strict deadlines and budgets. By prioritizing time management, I can ensure that my clients are satisfied with my work and are more likely to return for future projects.
        </p>
                </div>
                <div className="item2 col-lg-4 col-md-12 col-sm-12"  data-aos="zoom-in-up">
                    <img src={vector} alt='vector' />
                    <h5>EFFICIENT</h5>
                    <p>I believe that communication is essential to the success of any project. That is why I make sure that I am in constant communication with my clients and team members throughout the project. This ensures that everyone involved is on the same page and that any issues or concerns are addressed promptly.</p>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12"  data-aos="zoom-in-up">
                    <img src={dependable} alt='dependable' />
                    <h5>DEPENDABLE</h5>
                    <p>I am a developer who excels at problem-solving and pays close attention to detail. I ensure that every aspect of a website is both functional and visually appealing, while also being easy to navigate. I can guarantee that your website will be pixel-perfect and meet all of our clients' exact specifications. 
                        </p>
                </div>
            </div>
        </section>



    )
}

export default Who