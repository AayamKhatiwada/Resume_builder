import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SuccessNoty } from "../../../hooks/notifications";
import { setCurrentRecommendationResume } from "../../../store/resume/resume-action";
import { selectCurrentRecommendationResume } from "../../../store/resume/resume-selector";
import './adminRecommendation.css'

const AdminRecommendation = () => {

    const navigate = useNavigate()
    const dummyRecommendationResume = useSelector(selectCurrentRecommendationResume)

    const deleteResume = (resume) => {
        fetch(`http://127.0.0.1:8000/api/deleteRecommendationResume/${resume.id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    SuccessNoty(result.data);
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    return (
        <div className="admin-recommendation-main">
            {
                dummyRecommendationResume?.map((resume) => {
                    return (
                        <div className="col-sm-2 mb-4 cards text-center" key={resume.id}>
                            <div onClick={() => navigate(`/createResume/${resume.slug}`, { state: "Admin" })} className="link">
                                <div className="">
                                    <img src={`http://127.0.0.1:8000/uploads/recommendationImage/${resume.image}`} alt="Random" width="200px" height="200px" style={{ objectFit: "cover" }} />
                                    <div className="cards-text my-3">
                                        <h5>{resume.title}</h5>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-danger my-3" onClick={() => deleteResume(resume)}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default AdminRecommendation;