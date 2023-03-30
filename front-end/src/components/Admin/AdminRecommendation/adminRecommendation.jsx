import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrentRecommendationResume } from "../../../store/resume/resume-selector";
import DocBlank from '../../assets/doc-blank.png'

const AdminRecommendation = () => {

    const dummyRecommendationResume = useSelector(selectCurrentRecommendationResume)

    return (
        <>
            {
                dummyRecommendationResume?.map((resume) => {
                    return (
                        <div className="col-sm-2 mb-4 cards" key={resume.id}>
                            <Link to={`/createResume/${resume.slug}`} className="link">
                                <div className="">
                                    <img src={DocBlank} alt="Random" className="card-img-top" width="180px" />
                                    <div className="cards-text">
                                        <h5>{resume.title}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })
            }
        </>
    )
}

export default AdminRecommendation;