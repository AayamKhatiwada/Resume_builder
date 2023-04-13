import { useEffect, useState } from 'react'
import './adminDashboardItemComponent.css'

const AdminDashboardItemComponent = () => {

    const [resumeData, setResumeData] = useState([])

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
            <section> 
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Resumes</h5>
                                    <p className="card-text">{resumeData.resumes}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Recommended Resumes</h5>
                                    <p className="card-text">{resumeData.recommendationResume}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">{resumeData.user_count}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Community Resume</h5>
                                    <p className="card-text">{resumeData.commmunity_resume}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminDashboardItemComponent;