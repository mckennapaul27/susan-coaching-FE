import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    items: 1,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
};

const Testimonials = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);

    return (
        <div
            className='testimonials-area ptb-100'
            style={{
                backgroundColor: '#f8f9f8',
            }}>
            <div className='container'>
                <div className='section-title'>
                    <span className='sub-title'>Testimonials</span>
                    <h2>What People Say About Working With Susan</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>
                </div>

                {display ? (
                    <OwlCarousel
                        className='testimonials-slides owl-carousel owl-theme'
                        {...options}>
                        {[1, 2, 3, 4].map((b) => (
                            <div className='single-testimonials-item'>
                                {/* <img src="/images/user1.jpg" className="client-img" alt="image" /> */}
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel
                                    facilisis. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed tempor
                                    incididunt ut labore et dolore.
                                </p>
                                <h3>John Smith</h3>
                                <span>Attended Impromtu Speaking</span>
                            </div>
                        ))}
                    </OwlCarousel>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Testimonials;
