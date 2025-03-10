import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/layout/PageBanner';
import ContactForm from '../components/contact/ContactForm';
import Footer from '../components/_App/Footer';
import GoogleMap from '../components/contact/GoogleMap';

const Contact = () => {
    return (
        <React.Fragment>
            <PageBanner 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact" 
            />  

            <div className="contact-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-info">
                                <span className="sub-title">Contact Details</span>
                                <h2>Get in Touch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>

                                <ul>
                                    {/* <li>
                                        <div className="icon">
                                            <i className='bx bx-map'></i>
                                        </div>
                                        <h3>Our Address</h3>
                                        <p>Wilmslow, Cheshire, UK</p>
                                    </li> */}
                                    <li>
                                        <div className="icon">
                                            <i className='bx bx-phone-call'></i>
                                        </div>
                                        <h3>Contact</h3>
                                        <p>Mobile: <a href="tel:+44457895789">0161 483 1212</a></p>
                                        <p>Mail: <a href="mailto:hello@edemy.com">hello@susan coaching.com</a></p>
                                    </li>
                                    {/* <li>
                                        <div className="icon">
                                            <i className='bx bx-time-five'></i>
                                        </div>
                                        <h3>Hours of Operation</h3>
                                        <p>Monday - Friday: 09:00 - 20:00</p>
                                        <p>Sunday & Saturday: 10:30 - 22:00</p>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>

     
        </React.Fragment>
    )
}

export default Contact;