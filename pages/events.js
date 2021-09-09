import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import SubscribeForm from '../components/Common/SubscribeForm';

const Events = () => {
    return (
        <React.Fragment>
            <PageBanner
                pageTitle='Events'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Events'
            />

            <div className='events-area pt-100 pb-70'>
                <div className='container'>
                    <div className='shorting'>
                        <div className='row'>
                            {[1, 2, 3, 4, 5, 6].map((a) => (
                                <div className='col-lg-4 col-sm-6 col-md-6'>
                                    <div className='single-events-box'>
                                        <div className='image'>
                                            <Link href='/single-events'>
                                                <a className='d-block'>
                                                    <img
                                                        src='/images/events/events1.jpg'
                                                        alt='image'
                                                    />
                                                </a>
                                            </Link>
                                            <span className='date'>
                                                Wed, 9 September, 2021
                                            </span>
                                        </div>

                                        <div className='content'>
                                            <h3>
                                                <Link href='/single-events'>
                                                    <a>
                                                        Impromptu Speaking
                                                        Workshop
                                                    </a>
                                                </Link>
                                            </h3>
                                            <span className='location'>
                                                <i className='bx bx-map'></i>
                                                Online
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Events;
