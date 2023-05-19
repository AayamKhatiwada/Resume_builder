import { useNavigate } from 'react-router-dom';
import './adminSidebar.css'

const AdminSideBar = () => {

    const currentUrl = window.location.pathname;
    const navigate = useNavigate();

    return (
        <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <div className="adminsidebar-title adminsidebar-underline-padding">Admin</div>
                <div className="adminsidebar-options">
                    <div className={currentUrl === "/admin/" ? "adminsidebar-active nav-link link": "nav-link link"} id='dashboard' onClick={() => navigate("/admin/")}>Dashboard</div>
                    <div className={currentUrl.includes("/admin/templates") ? "adminsidebar-active nav-link link": "nav-link link"} id='templates' onClick={() => navigate("/admin/templates")}>Templates</div>
                    <div className={currentUrl.includes("/admin/users") ? "adminsidebar-active nav-link link": "nav-link link"} id='community' onClick={() => navigate("/admin/users")}>Users</div>
                    <div className={currentUrl.includes("/admin/community") ? "adminsidebar-active nav-link link": "nav-link link"} id='community' onClick={() => navigate("/admin/community")}>Community</div>
                </div>
            </div>
        </nav>
    )
}

export default AdminSideBar;