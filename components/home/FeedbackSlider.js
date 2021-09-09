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

const FeedbackSlider = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);
    return (
        <div className='feedback-with-bg-image ptb-100 jarallax'>
            <div className='container'>
                {display ? (
                    <OwlCarousel
                        className='feedback-slides feedback-slides-style-two owl-carousel owl-theme'
                        {...options}>
                        {['Paul', 'John', 'Susan', 'Alan', 'Jane'].map((a) => (
                            <div className='single-feedback-item-box'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum ultrices gravida. Risus commodo
                                    viverra maecenas accumsan lacus vel
                                    facilisis. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore.
                                </p>

                                <div className='client-info d-flex align-items-center'>
                                    <img src='/images/user1.jpg' alt='image' />
                                    <div className='title'>
                                        <h3>{a}</h3>
                                        <span>Attended Table Topics</span>
                                    </div>
                                </div>
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

export default FeedbackSlider;
