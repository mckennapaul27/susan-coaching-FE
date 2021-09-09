import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className='banner-wrapper-area'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12'>
                        <div className='banner-wrapper-content'>
                            <h1>The World’s Leading Table Topic Teacher</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&#39;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book.
                            </p>

                            <Link href='/'>
                                <a className='default-btn'>
                                    <i className='flaticon-agenda'></i> Browse
                                    Courses <span></span>
                                </a>
                            </Link>

                            <ul className='popular-search-list'>
                                <li>
                                    <span>Popular:</span>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Impromtu speaking</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Prepared speeches</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Rhetorical devices</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-12'>
                        <div className='banner-wrapper-image'>
                            <img src='/img/banner-img2.png' alt='image' />

                            <div className='banner-shape8'>
                                <img src='/img/banner-shape8.png' alt='image' />
                            </div>
                            <div className='banner-shape9'>
                                <img src='/img/banner-shape9.png' alt='image' />
                            </div>
                            <div className='banner-shape10'>
                                <img
                                    src='/img/banner-shape10.png'
                                    alt='image'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className='banner-inner-area'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className='single-banner-box'>
                                <div className='icon'>
                                    <i className='flaticon-brain-process'></i>
                                </div>
                                <h3>10,000 Online Courses</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className='single-banner-box'>
                                <div className='icon'>
                                    <i className='flaticon-calendar'></i>
                                </div>
                                <h3>Experts Teachers</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3'>
                            <div className='single-banner-box'>
                                <div className='icon'>
                                    <i className='flaticon-world'></i>
                                </div>
                                <h3>Lifetime Access</h3>
                                <p>Lorem ipsum dolor sit amet consectets.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='divider'></div>
        </div>
    );
};

export default MainBanner;
