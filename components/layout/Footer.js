import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='footer-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='single-footer-widget'>
                            {/* <Link href='/'>
                                <a className='logo'>
                                    <img src='/images/logo2.png' alt='logo' />
                                </a>
                            </Link> */}

                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                            </p>

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

                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <div className='single-footer-widget pl-5'>
                            <h3>Explore</h3>
                            <ul className='footer-links-list'>
                                <li>
                                    <Link href='/'>
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/a'>
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/a'>
                                        <a>Courses</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/a'>
                                        <a>Events</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/contact'>
                                        <a>Contact</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-2 col-md-6 col-sm-6'>
                        <div className='single-footer-widget'>
                            <h3>Resources</h3>
                            <ul className='footer-links-list'>
                                <li>
                                    <Link href='#'>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Events</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Business</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#'>
                                        <a>Blogs</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-6 col-sm-6'>
                        <div className='single-footer-widget'>
                            <h3>Address</h3>
                            <ul className='footer-contact-info'>
                                <li>
                                    <i className='bx bx-map'></i>
                                    Wilmslow
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i>
                                    <a href='tel:+44587154756'>0161 483 1616</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href='mailto:hello@edemy.com'>
                                        hello@susan-coaching.co.uk
                                    </a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href='tel:+557854578964'>
                                        0161 483 1616
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className='footer-bottom-area'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6'>
                            <p>
                                <i className='bx bx-copyright'></i>
                                {currentYear} eDemy is Proudly Powered by{' '}
                                <a
                                    target='_blank'
                                    rel='noreferrer'
                                    href='https://envytheme.com/'>
                                    EnvyTheme
                                </a>
                            </p>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                            <ul>
                                <li>
                                    <Link href='/privacy-policy'>
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/terms-of-service'>
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className='lines'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </footer>
    );
};

export default Footer;
