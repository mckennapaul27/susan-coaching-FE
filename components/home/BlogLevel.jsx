import React from 'react';
import Link from 'next/link';

const BlogLevel = () => {
    return (
        <div
            className='blog-area ptb-100'
            style={{ backgroundColor: '#f8f9f8' }}>
            <div className='container'>
                <div className='section-title'>
                    <span className='sub-title'>News and Blogs</span>
                    <h2>Latest Publications</h2>
                    <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book.
                    </p>
                </div>

                <div className='row'>
                    {[1, 2, 3].map((a) => (
                        <div className='col-lg-4 col-md-6'>
                            <div className='single-blog-post'>
                                <div className='post-image'>
                                    <Link href='/blog-post'>
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
                                            Communication
                                        </a>
                                    </Link>
                                    <h3>
                                        <Link href='/blog-post'>
                                            <a>
                                                How To Deliver A Effective
                                                Training Session
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
                                                <span>{`Susan Hewitt`}</span>
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

                    <div className='col-lg-12 col-md-12'>
                        <div className='blog-post-info'>
                            <p>
                                Get into details now?​{' '}
                                <Link href='/blog'>
                                    <a>View all posts</a>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogLevel;
