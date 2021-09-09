import React, { Fragment } from 'react';
import PageBanner from '../components/layout/PageBanner';
import Testimonials from '../components/layout/Testimonial';

const About3 = () => {
    return (
        <Fragment>
            <PageBanner
                pageTitle='About'
                homePageUrl='/'
                homePageText='Home'
                activePageText='About'
            />
            <div className='profile-area'>
                <div className='container'>
                    <div className='profile-box ptb-100'>
                        <div className='row align-items-center'>
                            <div className='col-lg-4 col-md-4'>
                                <div className='image'>
                                    <img
                                        src='/img/susan-hewitt.jpg'
                                        alt='image'
                                    />
                                </div>
                            </div>

                            <div className='col-lg-8 col-md-8'>
                                <div className='content'>
                                    <h3>Susan Hewitt</h3>
                                    <span className='sub-title'>
                                        Communication expert
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Quis ipsum suspendisse ultrices
                                        gravida. Risus commodo viverra maecenas
                                        accumsan lacus vel facilisis. Lorem
                                        ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua.
                                    </p>

                                    <ul className='info'>
                                        <li>
                                            <span>Phone Number:</span>{' '}
                                            <a href='tel:+44254588689'>
                                                (+44) 161 161 1616
                                            </a>
                                        </li>
                                        <li>
                                            <span>Email:</span>{' '}
                                            <a href='mailto:hello@susan-hewitt.com'>
                                                hello@susan-hewitt.com
                                            </a>
                                        </li>
                                    </ul>

                                    <ul className='social-link'>
                                        <li>
                                            <a
                                                href='#'
                                                className='d-block'
                                                target='_blank'>
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='d-block'
                                                target='_blank'>
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='d-block'
                                                target='_blank'>
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='d-block'
                                                target='_blank'>
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
        </Fragment>
    );
};

export default About3;
