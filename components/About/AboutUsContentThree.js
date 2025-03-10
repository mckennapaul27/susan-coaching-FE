import React from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

const AboutUsContentThree = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <div className="about-area-two pb-100" style={{
                paddingTop: '70px', 
            }}
                >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content-box">
                                <span className="sub-title">Distance Learning</span>
                                <h2>Build Your Project Management Skills Online, Anytime</h2>
                                <p>Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.</p>
                                <p><strong>Grow your knowledge and your opportunities with thought leadership, training and tools.</strong></p>
                            </div>
                        </div>

                        <div className="image-box col-lg-6 col-md-12" style={{display: 'flex', justifyContent:'center', borderRadius: '5px'}}>
                        <img src="/img/susan-hewitt.jpg" alt="" style={{height: '400px', borderRadius: '5px'}} />
                        </div>
                    </div>
                </div>

                {/* <div className="shape3">
                    <img src="/images/shape3.png" alt="image" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.png" alt="image" />
                </div>
                <div className="shape2">
                    <img src="/images/shape2.png" alt="image" />
                </div> */}
            </div>

            {/* If you want to change the video need to update videoID */}
            {/* <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            /> */}
            
        
        </React.Fragment>
    )
}

export default AboutUsContentThree;