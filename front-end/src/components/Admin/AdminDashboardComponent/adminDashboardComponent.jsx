import './adminDashboardComponent.css'
import { useDispatch } from 'react-redux';
import { removeAdmin } from '../../../store/admin/admin-action';
import { useNavigate } from 'react-router-dom';

const AdminDashboardComponent = ({children}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    var name = "Dashboard"
    const currentUrl = window.location.pathname;


    if(currentUrl === "/admin/"){
        name = "Dashboard"
    }else if (currentUrl.includes("/admin/templates")){
        name = "Templates"
    } else if (currentUrl.includes("/admin/party")){
        name = "Party"
    } else if (currentUrl.includes("/admin/candidate")){
        name = "Candidate"
    } else if (currentUrl.includes("/admin/election")){
        name = "Election"
    }

    const logout = () => {
        dispatch(removeAdmin());
        navigate('/')
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 main-content">
                        <div className='admin-dashboard-header' style={{background: "#2f2f2f", borderRadius: "30px"}}>
                            <div className="h1 text-white">{name}</div>
                            <div className="dropdown">
                                <div className="admin-profile" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQn5Cw7Sx51hfAqjTm2iWshuqBA6UVnWL0g&usqp=CAU" className="admin-button link" id="floating-button" alt="profile" />
                                    <div className='p-3 text-white admin-profile-text h4'>Aayam Khatiwada</div>
                                </div>
                                <div className="dropdown-menu admin-nav-dropdown" aria-labelledby="navbarDropdownMenuLink">
                                    <div onClick={() => logout()}>Log Out</div>
                                </div>
                            </div>
                        </div>

                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminDashboardComponent;