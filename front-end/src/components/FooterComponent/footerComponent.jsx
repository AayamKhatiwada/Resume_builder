import './footerComponent.css'

import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Insta from '../assets/Instagram.png'
import LinkedIn from '../assets/LinkedIn.png'

const FooterComponent = () => {
    return (
        <>
            <div className="footer-main">
                <div className="footer-top">
                    <div className="footer-one">
                        <div className="footer-one-title">
                            Booster Up
                        </div>
                        <div className="footer-one-desc">
                            Create your resume in a minute, get your
                            dream job in a blink.
                        </div>
                        <div className="footer-one-icons">
                            <img src={Facebook} alt="Facebook icon" />
                            <img src={Twitter} alt="Twitter icon" />
                            <img src={Insta} alt="Instagram icon" />
                            <img src={LinkedIn} alt="LinkedIn icon" />
                        </div>
                    </div>

                    <div className="footer-two">
                        <div className="footer-two-title">
                            Terms & Policies
                        </div>
                        <div className="footer-two-links">
                            <div className="footer-two-terms">
                                Terms of Services
                            </div>
                            <div className="footer-two-privacy">
                                Privacy Policy
                            </div>
                        </div>
                    </div>

                    <div className="footer-three">
                        <div className="footer-three-title">
                            Company
                        </div>
                        <div className="footer-three-links">
                            <div className='footer-three-links-item'>Home</div>
                            <div className='footer-three-links-item'>About Us</div>
                            <div className='footer-three-links-item'>Contact Us</div>
                        </div>
                    </div>

                    <div className="footer-four">
                        <div className="footer-four-title">
                            Contact
                        </div>
                        <div>
                            <div className='footer-four-details'>+977 9818354005</div>
                            <div className='footer-four-details'>jpt@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className="footer-down">
                    Copyright, Booster Up 2023. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default FooterComponent;