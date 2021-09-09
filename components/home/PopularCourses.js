import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className='courses-area pt-100 pb-100'>
            <div className='container'>
                <div className='section-title'>
                    <span className='sub-title'>NEW</span>
                    <h2>Upcoming Workshops</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s.
                    </p>
                </div>

                <div className='row'>
                    {[
                        'Table Topics',
                        'Rhetorical Devices',
                        'Impromtu Speaking',
                    ].map((t) => (
                        <div className='col-lg-4 col-md-6' key={t}>
                            <div className='single-courses-box bg-color'>
                                <div className='courses-image'>
                                    <Link href='/single-events'>
                                        <a className='d-block image'>
                                            <img
                                                src='/images/courses/courses6.jpg'
                                                alt='image'
                                            />
                                        </a>
                                    </Link>
                                </div>
                                <div className='courses-content'>
                                    <h3>
                                        <Link href='/single-events'>
                                            <a>{t}</a>
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore.
                                    </p>
                                    <ul className='courses-box-footer d-flex justify-content-between align-items-center'>
                                        <li>
                                            <i className='flaticon-people'></i>{' '}
                                            20 Students
                                        </li>
                                        <li>
                                            <i className='flaticon-time'></i>
                                            {'  '}
                                            9th Aug 2021
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='shape16'>
                <img src='/images/shape15.png' alt='image' />
            </div>
        </div>
    );
};

export default PopularCourses;
