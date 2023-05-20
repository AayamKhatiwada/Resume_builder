import AdminDashboardComponent from "../AdminDashboardComponent/adminDashboardComponent"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { SuccessNoty } from "../../../hooks/notifications"
import { selectCurrentCommunityResume } from "../../../store/resume/resume-selector"
import CreateTemplate from "../../../hooks/createTemplate"

const AdminCommunity = () => {

    const navigate = useNavigate()
    const currentCommunityResume = useSelector(selectCurrentCommunityResume)

    const deleteResume = (resume) => {
        fetch(`http://127.0.0.1:8000/api/deleteCommunityResume/${resume.id}`)
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
        <AdminDashboardComponent>
            <div className="admin-recommendation-main d-flex flex-row flex-wrap justify-content-start">
                {
                    currentCommunityResume?.map((resume) => {
                        const imgurl = CreateTemplate(JSON.parse(resume.ResumeData), resume.slug)
                        return (
                            <div className="col-sm-2 mb-4 cards text-center" key={resume.id}>
                                <div onClick={() => navigate(`/admin/community/${resume.slug}`, { state: "Admin" })} className="link">
                                    <div className="">
                                        <img src={imgurl} alt="Random" className="admin-card-img-top" id={`UserResumeImage${resume.slug}`} />
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
        </AdminDashboardComponent>
    )
}

export default AdminCommunity;