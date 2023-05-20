import { useEffect, useState } from 'react';
import AdminDashboardComponent from '../AdminDashboardComponent/adminDashboardComponent';
import './adminDashboardItemComponent.css'
import { useNavigate } from 'react-router-dom';

const AdminDashboardItemComponent = () => {

    const [resumeData, setResumeData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getAllData = () => {
            fetch('http://127.0.0.1:8000/api/getAllInfo')
                .then(res => res.json())
                .then(
                    (result) => {
                        setResumeData(result)
                        console.log(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
        resumeData.length === 0 && getAllData()
    }, [])

    return (
        <>
            <AdminDashboardComponent>
                <section>
                    <div className="container mt-5">
                        <div className="row admindashboard-cards">
                            <div className="col-md-3" onClick={() => navigate('/admin/users')}>
                                <div className="card-body">
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">{resumeData?.user_count}</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body">
                                    <h5 className="card-title">Resumes</h5>
                                    <p className="card-text">{resumeData?.resumes}</p>
                                </div>
                            </div>
                            <div className="col-md-3" onClick={() => navigate('/admin/community')}>
                                <div className="card-body">
                                    <h5 className="card-title">Resumes in community</h5>
                                    <p className="card-text">{resumeData?.community_resume}</p>
                                </div>
                            </div>
                            <div className="col-md-3" onClick={() => navigate('/admin/templates')}>
                                <div className="card-body">
                                    <h5 className="card-title">Template Resumes</h5>
                                    <p className="card-text">{resumeData?.recommendationResume}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AdminDashboardComponent>
        </>
    )
}

export default AdminDashboardItemComponent;