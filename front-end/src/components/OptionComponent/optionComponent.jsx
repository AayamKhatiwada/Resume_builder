import './optionComponent.css';
import DocBlank from '../assets/doc-blank.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeslug from '../../hooks/randomGenerator';
import { selectCurrentRecommendationResume, selectCurrentResume } from '../../store/resume/resume-selector';
import { setCurrentResume } from '../../store/resume/resume-action';
import FooterComponent from '../FooterComponent/footerComponent';
import { selectCurrentUser } from '../../store/user/user-selector';
import IsAuthed from '../../hooks/isAuthed';
import CreateImage from '../../hooks/createImage';
import CreateTemplate from '../../hooks/createTemplate';

const OptionComponent = () => {
    const user = useSelector(selectCurrentUser)
    const dummyResume = useSelector(selectCurrentResume)
    const dummyRecommendationResume = useSelector(selectCurrentRecommendationResume)
    const randomSlug = makeslug();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/getResume/${user.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    dispatch(setCurrentResume(result));
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand mx-sm-4" href="/">
                    <img src="https://via.placeholder.com/150x150" alt="Logo" />
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <form className="form-inline my-2 my-lg-0">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </nav>

            <section id="recommendations" style={{ background: "#efefef" }}>
                <div className="container">
                    <div className='recommendation-title'>Create new or choose template</div>
                    <div className="d-flex flex-row flex-wrap justify-content-start">
                        <div className="col-sm-2 mb-4 cards">
                            <Link to={`/createResume/${randomSlug}`} className="link">
                                <div className="">
                                    <img src={DocBlank} alt="Random" className="card-img-top" width="180px" height="280px"/>
                                    <div className="cards-text">
                                        <h5 style={{ color: "black" }}>New Resume</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {
                            dummyRecommendationResume?.map((resume) => {
                                return (
                                    <div className="col-sm-2 mb-4 cards" key={resume.id}>
                                        <Link to={`/createResume/${resume.slug}`} className="link">
                                            <div className="">
                                                <img src={`http://127.0.0.1:8000/uploads/recommendationImage/${resume.image}`} alt="Random" className="card-img-top" width="180px" height="280px" style={{objectFit: "cover"}}/>
                                                <div className="cards-text">
                                                    <h5>{resume.title}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>

            {
                IsAuthed(user) &&
                <section id="UserResumes">
                    <div className="container" style={{ marginBottom: "3rem" }}>
                        <div className='recommendation-title'>Recent Resumes</div>
                        <div className="d-flex flex-row flex-wrap justify-content-start">
                            {
                                dummyResume?.map((resume) => {
                                    const options = {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    };
                                    var date = new Date(resume.updated_at);
                                    const dateFormatted = date.toLocaleString('en-US', options)
                                    console.log(JSON.parse(resume.ResumeData))
                                    const imgurl = CreateTemplate(JSON.parse(resume.ResumeData), resume.id)

                                    // const ImgUrl = CreateImage(resume.title)

                                    return (
                                        <div className="col-sm-2 mb-4 cards card" key={resume.id}>
                                            <Link to={`/createResume/${resume.slug}`} className="link">
                                                <div className="">
                                                    <img src={imgurl} alt="Random" className="option-card-img-top" id={`UserResumeImage${resume.id}`} style={{ objectFit: "contain" }} />
                                                    <hr />
                                                    <div className="cards-text">
                                                        <h5>{resume.title}</h5>
                                                        <p style={{ fontSize: "12px" }}>Updated at: {dateFormatted}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </section>
            }
            <FooterComponent />
        </>
    );
}

export default OptionComponent;