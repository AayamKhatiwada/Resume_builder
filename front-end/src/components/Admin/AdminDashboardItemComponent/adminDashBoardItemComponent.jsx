import AdminDashboardComponent from '../AdminDashboardComponent/adminDashboardComponent';
import './adminDashboardItemComponent.css'

const AdminDashboardItemComponent = () => {
    return (
        <>
            <AdminDashboardComponent>
                <section>
                    <div className="container mt-5">
                        <div className="row admindashboard-cards">
                            <div className="col-md-3">
                                <div className="card-body">
                                    <h5 className="card-title">Users</h5>
                                    <p className="card-text">10</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body">
                                    <h5 className="card-title">Party</h5>
                                    <p className="card-text">10</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-body">
                                    <h5 className="card-title">Candidate</h5>
                                    <p className="card-text">10</p>
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