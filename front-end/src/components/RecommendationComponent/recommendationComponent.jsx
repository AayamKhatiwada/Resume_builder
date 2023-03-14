import './recommendationComponent.css';
import DocBlank from '../assets/doc-blank.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import makeslug from '../../hooks/randomGenerator';
import { selectCurrentResume } from '../../store/resume/resume-selector';
import { setCurrentResume } from '../../store/resume/resume-action';

const RecommendationComponent = () => {

    const dummyResume = useSelector(selectCurrentResume)
    const randomSlug = makeslug();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/getResume")
            .then(res => res.json())
            .then(
                (result) => {
                    dispatch(setCurrentResume(result));
                },
                (error) => {
                    console.log(error)
                }
            )
    }, [])

    return (
        <>
            <section id="recommendations" style={{ marginTop: "9rem", background: "#efefef" }}>
                <div className="container">
                    <div className='recommendation-title'>Create new or choose template</div>
                    <div className="row">
                        <div className="col-sm-3 mb-4">
                            <Link to={`/createResume/${randomSlug}`}>
                                <div className="card">
                                    <img src={DocBlank} alt="Random Image" className="card-img-top" width="180px" />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ color: "black" }}>New Resume</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        {
                            dummyResume?.map((resume) => {
                                return (
                                    <Link to={`/createResume/${resume.slug}`} key={resume.id}>
                                        <div className="col-sm-3 mb-4">
                                            <div className="card">
                                                <img src={DocBlank} alt="Random Image" className="card-img-top" width="180px" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{resume.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecommendationComponent;