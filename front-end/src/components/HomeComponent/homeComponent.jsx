import './homeComponent.css'

import NavigationComponentGuest from "../NavigationComponentGuest/navigationComponentGuest";
import FooterComponent from "../FooterComponent/footerComponent";

import ResumeTemplate from '../assets/Resume_template.png'
import Step1 from '../assets/step_1.png'
import Step2 from '../assets/step_2.png'
import Step3 from '../assets/step_3.png'
import ResumeTemplate1 from '../assets/Resume_template_1.png'
import GroupResume from '../assets/Group_resume.png'
import AboutUs from '../assets/AboutUs.png'
import Benefits1 from '../assets/Benefits_1.png'
import Benefits2 from '../assets/Benefits_2.png'
import Benefits3 from '../assets/Benefits_3.png'
import Benefits4 from '../assets/Benefits_4.png'
import Benefits5 from '../assets/Benefits_5.png'
import Testimonial1 from '../assets/testimonials_1.png'
import { Link } from 'react-router-dom';

const HomeComponent = () => {

    return (
        <div>
            <NavigationComponentGuest />

            <div className="home-main">
                <div className="home-quick">
                    <div className="home-quick-leftside col-sm-6">
                        <div className="home-quick-leftside-title">
                            Create a <span className="home-color-orange">resume</span> that secures your <span className="home-color-orange">dream job</span>
                        </div>
                        <div className="home-quick-leftside-desc">
                            Build a resume thats piques the interest of recruiters and
                            gets you hired. It's fast and easy to use.
                        </div>
                        <Link className="home-quick-leftside-button link" to={"/optionFor"}>
                            Quick Create
                        </Link>
                    </div>
                    <div className="home-quick-rightside col-sm-6">
                        <img src={ResumeTemplate} alt="Resume Template" />
                    </div>
                </div>

                <div className="home-resumeStep">
                    <div className="home-resumeStep-title">
                        Build your <span className="home-color-orange">resume</span> in 3 steps
                    </div>

                    <div className="home-resumeStep-right">
                        <img src={Step1} alt="Step 1" />
                        <div className="home-resumeStep-number">
                            1.
                        </div>
                        <div className="home-resumeStep-step">
                            <div className="home-resumeStep-step-title">
                                Pick a Template
                            </div>
                            <div className="home-resumeStep-step-desc">
                                Fill in the blanks and see results in real-time.
                            </div>
                        </div>
                    </div>

                    <div className="home-resumeStep-left">
                        <img src={Step2} alt="Step 2" />
                        <div className="home-resumeStep-number">
                            2.
                        </div>
                        <div className="home-resumeStep-step">
                            <div className="home-resumeStep-step-title">
                                Customize Your Layout
                            </div>
                            <div className="home-resumeStep-step-desc">
                                Give your document a professional and elegant look.
                            </div>
                        </div>
                    </div>

                    <div className="home-resumeStep-right">
                        <img src={Step3} alt="Step 3" />
                        <div className="home-resumeStep-number">
                            3.
                        </div>
                        <div className="home-resumeStep-step">
                            <div className="home-resumeStep-step-title">
                                Hit 'Download!'
                            </div>
                            <div className="home-resumeStep-step-desc">
                                Download your resume, apply, get more interviews.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-snapshot">
                    <div className="home-snapshot-left col-sm-6">
                        <div className="home-snapshot-left-title">
                            Snapshot of our simple-to-use editor
                        </div>
                        <img src={ResumeTemplate1} alt="Resume template 1" width="90%" />
                    </div>

                    <div className="home-snapshot-right col-sm-5">
                        <div className="home-snapshot-right-desc">
                            All the flexibility & intuition you need to build a resume
                            that stands out
                        </div>

                        <ul className="home-snapshot-right-points">
                            <li className="home-snapshot-right-points-title">
                                Multi-theme & type face
                            </li>
                            <div className="home-snapshot-right-points-desc">
                                for personalization.
                            </div>

                            <li className="home-snapshot-right-points-title">
                                Placeholder resume content
                            </li>
                            <div className="home-snapshot-right-points-desc">
                                to guide your filling.
                            </div>

                            <li className="home-snapshot-right-points-title">
                                Multiple layout & templates
                            </li>
                            <div className="home-snapshot-right-points-desc">
                                to choose from.
                            </div>
                        </ul>

                        <button className="home-snapshot-button">Create Resume</button>

                        <div className="home-snapshot-our-stats">
                            Our stats:
                        </div>

                        <div className="home-snapshot-stats">
                            <div className="home-snapshot-users">
                                <div className="home-snapshot-users-number">
                                    200+
                                </div>
                                <div className="home-snapshot-users-name">
                                    users
                                </div>
                            </div>

                            <div className="home-snapshot-time">
                                <div className="home-snapshot-time-min">
                                    3 mins
                                </div>
                                <div className="home-snapshot-time-avg">
                                    Average resume building time
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-pickTemplate">
                    <div className="home-pickTemplate-leftside col-sm-5">
                        <div className="home-pickTemplate-leftside-title">
                            You can always pick
                            any templates you like
                        </div>
                        <div className="home-pickTemplate-leftside-label">
                            Our Services
                        </div>
                        <div className="home-pickTemplate-leftside-desc">
                            Choose from one of our expertly prepared resume types below, by using pre-established parts that have been endorsed by recruiters internationally, you can begin creating your resume in under 5 seconds, additionally, you can edit to fit your preferences and personality before clicking "Download". Even if you have never created a resume before, it is that SIMPLE to use!
                        </div>
                    </div>

                    <div className="home-pickTemplate-rightside col-sm-6">
                        <img src={GroupResume} alt="Group Resume" width="100%" />
                    </div>
                </div>

                <div className="home-aboutUs">
                    <div className="home-aboutUs-title">
                        About Booster Up
                    </div>

                    <div className="home-aboutUs-detail">
                        <div className="home-aboutUs-left col-sm-6">
                            <img src={AboutUs} alt="About Us" width="100%" />
                        </div>

                        <div className="home-aboutUs-right col-sm-6">
                            <div className="home-aboutUs-right-desc">
                                Booster Up is a product of boosting all the previous work and capabilities with in a piece of paper. Booster Up was born of the need to create a new way for job-seekers to connect with recruiters. Hence, our best hands got to work with one thing in mind: to help you find a great job faster. We went even further to ensure that our Template designs meet your expectation. With us, you can spin out an impressive resume that makes a memorable first impression!
                            </div>

                            <button className="home-aboutUs-right-button">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>

                <div className="home-benefits">
                    <div className="home-benefits-title">
                        Benefits Of Using Our Product
                    </div>
                    <div className="home-benefits-label">
                        Why Choose Us?
                    </div>
                    <div className="home-benefits-details">
                        <div className="home-benefits-details-item col-sm-4">
                            <img src={Benefits1} alt="Benefits 1" style={{ objectFit: "contain" }} />
                            <div className="home-benefits-details-item-body">
                                <div className="home-benefits-details-item-body-title">
                                    Easy to use
                                </div>
                                <div className="home-benefits-details-item-body-desc">
                                    The process of writing a resume is
                                    substantially sped up and simplified
                                    by using our resume builder.
                                </div>
                            </div>
                        </div>

                        <div className="home-benefits-details-item col-sm-4">
                            <img src={Benefits2} alt="Benefits 2" style={{ objectFit: "contain" }} />
                            <div className="home-benefits-details-item-body">
                                <div className="home-benefits-details-item-body-title">
                                    Secure
                                </div>
                                <div className="home-benefits-details-item-body-desc">
                                    We respect your privacy & give you
                                    control over your content and your
                                    data with us.
                                </div>
                            </div>
                        </div>

                        <div className="home-benefits-details-item col-sm-4">
                            <img src={Benefits3} alt="Benefits 3" style={{ objectFit: "contain" }} />
                            <div className="home-benefits-details-item-body">
                                <div className="home-benefits-details-item-body-title">
                                    Cool Templates
                                </div>
                                <div className="home-benefits-details-item-body-desc">
                                    Our template designs help your
                                    resume standout in a pool of others.
                                </div>
                            </div>
                        </div>

                        <div className="home-benefits-details-item col-sm-5">
                            <img src={Benefits4} alt="Benefits 4" style={{ objectFit: "contain" }} />
                            <div className="home-benefits-details-item-body">
                                <div className="home-benefits-details-item-body-title">
                                    Intelligent
                                    Design
                                </div>
                                <div className="home-benefits-details-item-body-desc">
                                    With us, you won't have to bother
                                    about the minute details of resume
                                    development, such as font
                                    choice, layout, etc.
                                </div>
                            </div>
                        </div>

                        <div className="home-benefits-details-item col-sm-5">
                            <img src={Benefits5} alt="Benefits 5" style={{ objectFit: "contain" }} />
                            <div className="home-benefits-details-item-body">
                                <div className="home-benefits-details-item-body-title">
                                    No Hidden
                                    Charges
                                </div>
                                <div className="home-benefits-details-item-body-desc">
                                    We've got a free version and our
                                    premium pricing is clear. We notify you
                                    about any new changes in good time.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-testimonials">
                    <div className="home-testimonials-up">
                        <div className="home-testimonials-up-left col-sm-4">
                            <div className="home-testimonials-up-left-title">
                                Testimonials From Our Previous Users
                            </div>
                            <div className="home-testimonials-up-left-label">
                                What People Say About Us
                            </div>
                        </div>

                        <div className="home-testimonials-card col-sm-5">
                            <div className="home-testimonials-card-top">
                                <img src={Testimonial1} alt="Testimonials 1" />
                                <div className="home-testimonials-card-top-details">
                                    <div className="home-testimonials-card-top-title">
                                        Peter Ime,
                                    </div>
                                    <div className="home-testimonials-card-top-label">
                                        Web Developer
                                    </div>
                                </div>
                            </div>
                            <div className="home-testimonials-card-down">
                                We move with make a Creative Strategy for help your
                                goal, we help to improve your income by a services,
                            </div>
                        </div>
                    </div>

                    <div className="home-testimonials-down">
                        <div className="home-testimonials-card col-sm-5">
                            <div className="home-testimonials-card-top">
                                <img src={Testimonial1} alt="Testimonials 1" />
                                <div className="home-testimonials-card-top-details">
                                    <div className="home-testimonials-card-top-title">
                                        Abraham udoinyang,
                                    </div>
                                    <div className="home-testimonials-card-top-label">
                                        UI/UX Designer
                                    </div>
                                </div>
                            </div>
                            <div className="home-testimonials-card-down">
                                This is the best resume builder that I have come across so far,
                                getting across, it is user friendly and also HR approved,
                                I got my first job using this template.
                            </div>
                        </div>
                        <div className="home-testimonials-card col-sm-5">
                            <div className="home-testimonials-card-top">
                                <img src={Testimonial1} alt="Testimonials 1" />
                                <div className="home-testimonials-card-top-details">
                                    <div className="home-testimonials-card-top-title">
                                        Nsisong Akpakpan,
                                    </div>
                                    <div className="home-testimonials-card-top-label">
                                        Web Developer
                                    </div>
                                </div>
                            </div>
                            <div className="home-testimonials-card-down">
                                The experience is just smooth and adaptable,
                                I was called up for an interview I applied with using future resume and my resume was naturally commended.
                                Thanks Future Resume.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterComponent />
        </div>
    );
}

export default HomeComponent;