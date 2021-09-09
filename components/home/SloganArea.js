import React from 'react';

const SloganArea = () => {
    return (
        <div
            className='slogan-area ptb-200 bg-fffaf3 ptb-100'
            // style={{ marginTop: '200px', marginBottom: '100px' }}
        >
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-5 col-md-12'>
                        <div className='slogan-image'>
                            <img src='/img/susan-hewitt.jpg' alt='image' />
                        </div>
                    </div>

                    <div className='col-lg-7 col-md-12'>
                        <div className='slogan-content'>
                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                &#39;Content here, content here&#39;, making it
                                look like readable English.
                            </p>
                            <h3>Susan Hewitt</h3>
                            <span className='sub-title'>Coach</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='divider2'></div>
            <div className='divider3'></div>
            {/* <div className='shape2'>
                <img src='/images/shape2.png' alt='image' />
            </div>
            <div className='shape3'>
                <img src='/images/shape3.png' alt='image' />
            </div>
            <div className='shape4'>
                <img src='/images/shape4.png' alt='image' />
            </div>
            <div className='shape9'>
                <img src='/images/shape8.svg' alt='image' />
            </div> */}
        </div>
    );
};

export default SloganArea;
