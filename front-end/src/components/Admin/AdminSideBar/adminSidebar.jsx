import './adminSidebar.css'

const AdminSideBar = ({ setOptions, options }) => {
    return (
        <nav className="col-md-2 d-none d-md-block sidebar">
            <div className="sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="nav-link link" id='dashboard' onClick={() => setOptions("Dashboard")}>Dashboard</div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link link" id='community' onClick={() => setOptions("Template")}>Recomm Templates</div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminSideBar;