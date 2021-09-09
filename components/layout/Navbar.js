import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menu, setMenu] = React.useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    React.useEffect(() => {
        let elementId = document.getElementById('navbar');
        document.addEventListener('scroll', () => {
            if (window.scrollY > 170) {
                elementId.classList.add('is-sticky');
            } else {
                elementId.classList.remove('is-sticky');
            }
        });
        window.scrollTo(0, 0);
    });

    const classOne = menu
        ? 'collapse navbar-collapse'
        : 'collapse navbar-collapse show';
    const classTwo = menu
        ? 'navbar-toggler navbar-toggler-right collapsed'
        : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id='navbar' className='navbar-area'>
                <div className='edemy-nav'>
                    <div className='container'>
                        <div className='navbar navbar-expand-lg navbar-light'>
                            <Link href='/'>
                                <a
                                    onClick={toggleNavbar}
                                    className='navbar-brand'>
                                    <img
                                        src='/img/logo.png'
                                        alt='logo'
                                        style={{ maxHeight: '75px' }}
                                    />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type='button'
                                data-toggle='collapse'
                                data-target='#navbarSupportedContent'
                                aria-controls='navbarSupportedContent'
                                aria-expanded='false'
                                aria-label='Toggle navigation'>
                                <span className='icon-bar top-bar'></span>
                                <span className='icon-bar middle-bar'></span>
                                <span className='icon-bar bottom-bar'></span>
                            </button>

                            <div
                                className={classOne}
                                id='navbarSupportedContent'>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'>
                                        <Link href='/' activeClassName='active'>
                                            <a className='nav-link'>Home </a>
                                        </Link>
                                    </li>

                                    <li className='nav-item'>
                                        <Link href='#'>
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className='nav-link'>
                                                Pages{' '}
                                                <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className='dropdown-menu'>
                                            <li className='nav-item'>
                                                <Link href='/about'>
                                                    <a className='nav-link'>
                                                        About Us{' '}
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/faq'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        FAQs
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/contact'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Contact
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/404'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        404 Error Page
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/privacy-policy'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Privacy Policy
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/terms-of-service'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Terms of Service
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className='nav-item'>
                                        <Link href='#'>
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className='nav-link'>
                                                Courses{' '}
                                                <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className='dropdown-menu'>
                                            <li className='nav-item'>
                                                <Link
                                                    href='/events'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Events
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link
                                                    href='/single-events'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Events Details
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className='nav-item'>
                                        <Link href='/blog'>
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className='nav-link'>
                                                Blog{' '}
                                                <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className='dropdown-menu'>
                                            <li className='nav-item'>
                                                <Link
                                                    href='/blog'
                                                    activeClassName='active'>
                                                    <a
                                                        onClick={toggleNavbar}
                                                        className='nav-link'>
                                                        Blog
                                                    </a>
                                                </Link>
                                            </li>

                                            <li className='nav-item'>
                                                <Link href='/blog-post'>
                                                    <a className='nav-link'>
                                                        Single blog{' '}
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
