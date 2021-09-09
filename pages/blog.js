import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const Blog1 = () => {
    return (
        <React.Fragment>
            <PageBanner
                pageTitle='Blog home'
                homePageUrl='/'
                homePageText='Home'
                activePageText='Blog home'
            />

            <div className='blog-area ptb-100'>
                <div className='container'>
                    <div className='row'>
                        {[1, 2, 3, 4, 5, 6].map((a) => (
                            <div className='col-lg-6 col-md-6'>
                                <div className='single-blog-post'>
                                    <div className='post-image'>
                                        <Link href='/single-blog-1'>
                                            <a className='d-block'>
                                                <img
                                                    src='/images/blog/blog1.jpg'
                                                    alt='image'
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className='post-content'>
                                        <Link href='#'>
                                            <a className='category'>
                                                Education
                                            </a>
                                        </Link>
                                        <h3>
                                            <Link href='/single-blog-1'>
                                                <a>
                                                    Learn How To Produce
                                                    Effective Hand Gestures In A
                                                    Virtual Setting
                                                </a>
                                            </Link>
                                        </h3>
                                        <ul className='post-content-footer d-flex justify-content-between align-items-center'>
                                            <li>
                                                <div className='post-author d-flex align-items-center'>
                                                    <img
                                                        src='/img/susan-hewitt.jpg'
                                                        className='rounded-circle'
                                                        alt='image'
                                                    />
                                                    <span>Susan Hewitt</span>
                                                </div>
                                            </li>
                                            <li>
                                                <i className='flaticon-calendar'></i>{' '}
                                                April 30, 2020
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Pagination */}
                        <div className='col-lg-12 col-md-12'>
                            <div className='pagination-area text-center'>
                                <a href='#' className='prev page-numbers'>
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span
                                    className='page-numbers current'
                                    aria-current='page'>
                                    1
                                </span>
                                <a href='#' className='page-numbers'>
                                    2
                                </a>
                                <a href='#' className='page-numbers'>
                                    3
                                </a>
                                <a href='#' className='page-numbers'>
                                    4
                                </a>
                                <a href='#' className='next page-numbers'>
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Blog1;
