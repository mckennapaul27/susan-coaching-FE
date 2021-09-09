import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className='features-area pt-100 pb-70'>
            <div className='container'>
                <div className='section-title'>
                    <span className='sub-title'>Efficient learning</span>
                    <h2>
                        Affordable Online Courses and Learning Opportunities​
                    </h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of.
                    </p>
                </div>

                <div className='row'>
                    <div className='col-lg-3 col-sm-6 col-md-6'>
                        <div className='single-features-box'>
                            <div className='icon'>
                                <i className='flaticon-brain-process'></i>
                            </div>
                            <h3>Learn the Latest Top Skills</h3>
                            <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of.
                            </p>

                            <Link href='/events'>
                                <a className='link-btn'>Browse Courses</a>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-6 col-md-6'>
                        <div className='single-features-box'>
                            <div className='icon'>
                                <i className='flaticon-computer'></i>
                            </div>
                            <h3>Learn in Your Own Pace</h3>
                            <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of.
                            </p>

                            <Link href='/events'>
                                <a className='link-btn'>Browse Courses</a>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-6 col-md-6'>
                        <div className='single-features-box'>
                            <div className='icon'>
                                <i className='flaticon-shield-1'></i>
                            </div>
                            <h3>Learn From Industry Experts</h3>
                            <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of.
                            </p>

                            <Link href='/events'>
                                <a className='link-btn'>Browse Courses</a>
                            </Link>
                        </div>
                    </div>

                    <div className='col-lg-3 col-sm-6 col-md-6'>
                        <div className='single-features-box'>
                            <div className='icon'>
                                <i className='flaticon-world'></i>
                            </div>
                            <h3>Enjoy Learning From Anywhere</h3>
                            <p>
                                Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown
                                printer took a galley of.
                            </p>

                            <Link href='/events'>
                                <a className='link-btn'>Browse Courses</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
