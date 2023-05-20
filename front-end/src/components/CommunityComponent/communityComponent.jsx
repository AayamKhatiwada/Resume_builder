import { useNavigate } from 'react-router-dom';
import './communityComponent.css'
import { useSelector } from 'react-redux';
import { selectCurrentCommunityResume } from '../../store/resume/resume-selector';
import CreateTemplate from '../../hooks/createTemplate';
import { useState } from 'react';

const CommunityComponent = () => {

    const navigate = useNavigate()
    const communityResume = useSelector(selectCurrentCommunityResume);
    const [search, setSearch] = useState("")

    const filterCommunityResume = communityResume.filter((resume) => {
        return resume.title.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <header className="text-white text-center py-5" style={{ background: "rgb(253 124 31 / 91%)" }}>
                <h1>Resume Community</h1>
                <p className="lead">Share and showcase your resumes</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search resumes..."
                                    value={search}
                                    onChange={(e)=> setSearch(e.target.value)}
                                />
                                <button className="btn btn-primary" type="button">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Resumes</h2>
                        <div className='d-flex flex-wrap'>
                            {
                                filterCommunityResume.length !== 0 ? filterCommunityResume?.map((resume) => {
                                    const options = {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    };
                                    var date = new Date(resume.updated_at);
                                    const dateFormatted = date.toLocaleString('en-US', options)
                                    // console.log(JSON.parse(resume.ResumeData))
                                    CreateTemplate(JSON.parse(resume.ResumeData), resume.slug)

                                    return (
                                        <div className="col-sm-2 m-3 card" key={resume.id}>
                                            <div onClick={() => navigate(`/createResume/${resume.slug}`, { state: "Community" })} className="link">
                                                <div className="">
                                                    <img src="" alt="Random" className="card-img-top" width="180px" height="210px" id={`UserResumeImage${resume.slug}`} style={{ objectFit: "scale-down", padding: "1rem" }} />
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
                                :
                                (
                                    <div style={{height: "21.5rem"}}>
                                        There are no templates
                                    </div>
                                )
                            }
                        </div>
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