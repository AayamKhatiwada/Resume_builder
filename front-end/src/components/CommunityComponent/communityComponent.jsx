import { useNavigate } from 'react-router-dom';
import './communityComponent.css'
import { useEffect } from 'react';
import CreateImage from '../../hooks/createImage';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCommunityResume } from '../../store/resume/resume-action';
import { selectCurrentCommunityResume } from '../../store/resume/resume-selector';

const CommunityComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const communityResume = useSelector(selectCurrentCommunityResume);
    console.log(communityResume)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/getCommunityResume`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    dispatch(setCurrentCommunityResume(result));
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <>
            <header className="text-white text-center py-5" style={{ background: "rgb(253 124 31 / 91%)" }}>
                <h1>Resume Community</h1>
                <p className="lead">Share and showcase your resumes</p>
            </header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>Resumes</h2>
                        <div className='d-flex flex-wrap'>
                            {
                                communityResume.length !== 0 && communityResume?.map((resume) => {
                                    const options = {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    };
                                    var date = new Date(resume.updated_at);
                                    const dateFormatted = date.toLocaleString('en-US', options)
                                    // console.log(JSON.parse(resume.ResumeData))
                                    // CreateTemplate(JSON.parse(resume.ResumeData), resume.id)
                                    const ImgUrl = CreateImage(resume.title)

                                    return (
                                        <div className="col-sm-3 m-3 card" key={resume.id}>
                                            <div onClick={() => navigate(`/createResume/${resume.slug}`, { state: "Community" })} className="link">
                                                <div className="">
                                                    <img src={ImgUrl} alt="Random" className="card-img-top" width="180px" height="210px" id={`UserResumeImageresume.id}`} style={{ objectFit: "scale-down" }} />
                                                    <hr />
                                                    <div className="cards-text">
                                                        <h5>{resume.title}</h5>
                                                        <p style={{ fontSize: "12px" }}>Updated at: {dateFormatted}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h2>Filter By</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="filterCategory">Category</label>
                                <select className="form-control community-form-control" id="filterCategory">
                                    <option>All</option>
                                    <option>Software Developer</option>
                                    <option>UX Designer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="filterLocation">Location</label>
                                <select className="form-control community-form-control" id="filterLocation">
                                    <option>All</option>
                                    <option>New York</option>
                                    <option>San Francisco</option>
                                    <option>Los Angeles</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-warning text-white">Apply Filter</button>
                        </form>
                    </div>
                </div>
            </div>
            <footer className="text-white text-center py-3" style={{ background: "rgb(253 124 31 / 91%)" }}>
                <p>&copy; 2023 Resume Community. All rights reserved.</p>
            </footer>
        </>
    )
}

export default CommunityComponent;