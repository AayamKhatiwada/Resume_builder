import { useState } from 'react';
import AdminDashboardItemComponent from '../AdminDashboardItemComponent/adminDashBoardItemComponent';
import AdminRecommendation from '../AdminRecommendation/adminRecommendation';
import AdminRecommendationRegister from '../AdminRecommendationRegister/adminRecommendationRegister';
import AdminSideBar from '../AdminSideBar/adminSidebar';
import './adminDashboardComponent.css'

const AdminDashboardComponent = () => {

    const [options, setOptions] = useState("Dashboard")
    const [displayOption, setDisplayOption] = useState(false);
    const [displayAdminOption, setDisplayAdminOption] = useState(false);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <AdminSideBar setOptions={setOptions} options={options} />
                    <div className="col-md-10 main-content">
                        <div className='px-5 d-flex justify-content-between' style={{padding: "1rem 0 2rem 0"}}>
                            <div className="h1 text-secondary">{options}</div>
                            <div className='d-flex align-items-center admin-profile' onClick={() => setDisplayAdminOption(!displayAdminOption)}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQn5Cw7Sx51hfAqjTm2iWshuqBA6UVnWL0g&usqp=CAU" className="admin-button link" id="floating-button" />
                                <div className='p-3 admin-profile-text'>Aayam Khatiwada</div>
                            </div>
                        </div>
                        {
                            displayAdminOption && (
                                <div className="floating-menu-admin" id="floating-menu-admin">
                                    <ul>
                                        <li>Log Out</li>
                                    </ul>
                                </div>
                            )
                        }

                        <button className="floating-button link" id="floating-button" onClick={() => setDisplayOption(!displayOption)}>+</button>
                        {
                            displayOption && (

                                <div className="floating-menu" id="floating-menu">
                                    <ul>
                                        <li onClick={() => setOptions("Recommendation Resume Register")}>Add recommendation template</li>
                                        <li>Add new resume</li>
                                    </ul>
                                </div>
                            )
                        }

                        {
                            options === "Dashboard" && <AdminDashboardItemComponent />
                        }
                        {
                            options === "Template" && <AdminRecommendation />
                        }
                        {
                            options === "Recommendation Resume Register" && <AdminRecommendationRegister />
                        }

                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboardComponent;